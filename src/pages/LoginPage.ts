import { expect, Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly loginErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']");
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.loginErrorMessage = page.locator("[role='alert']");
    }

    async open() {
        await this.page.goto("/");
    }
    async assertLoginPageVisible() {
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.signInButton).toBeVisible();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async assertLoginErrorVisible() {
        await expect(this.loginErrorMessage).toBeVisible();
    }

}