import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly _productsTitle: Locator;
    private readonly _passwordInputField: Locator;
    private readonly _loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._productsTitle = this.page.locator('[data-test="title"]');
        this._passwordInputField = this.page.locator('[data-test="password"]');
        this._loginButton = this.page.locator('[data-test="login-button"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
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