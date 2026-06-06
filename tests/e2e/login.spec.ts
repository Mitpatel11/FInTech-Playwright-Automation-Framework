import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('User Can Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.assertLoginPageVisible();
    await loginPage.login(process.env.TEST_USER || "", process.env.TEST_PASSWORD || "");

});

test('User cannot login', async ({ page }) => {
     const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.assertLoginPageVisible();

  await loginPage.login("wrong_user", "wrong_password");

  await loginPage.assertLoginErrorVisible();
  await loginPage.assertLoginPageVisible();
});