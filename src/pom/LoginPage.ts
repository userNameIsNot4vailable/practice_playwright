import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly _usernameInputField: Locator;
    private readonly _passwordInputField: Locator;
    private readonly _loginButton: Locator;
    private readonly _loginPageUrl: string = 'https://www.saucedemo.com/';

    constructor(page: Page) {
        this.page = page;
        this._usernameInputField = this.page.locator('[data-test="username"]');
        this._passwordInputField = this.page.locator('[data-test="password"]');
        this._loginButton = this.page.locator('[data-test="login-button"]');
    }

    async goto() {
        await this.page.goto(this._loginPageUrl);
    }

    async logIn(username: string, password: string) {
        await this._usernameInputField.click();
        await this._usernameInputField.fill(username);
        await this._passwordInputField.click();
        await this._passwordInputField.fill(password);
        await this._loginButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    get loginButton(): Locator {
        return this._loginButton;
    }

    get usernameInputField(): Locator {
        return this._usernameInputField;
    }

    get passwordInputField(): Locator {
        return this._passwordInputField;
    }

}