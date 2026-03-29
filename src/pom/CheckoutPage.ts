import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
    private readonly page: Page;
    private readonly _title: Locator;
    private readonly _cancelButton: Locator;
    private readonly _continueButton: Locator;
    private readonly _firstName: Locator;
    private readonly _lastName: Locator;
    private readonly _postalCode: Locator;


    constructor(page: Page) {
        this.page = page;
        this._title = this.page.locator('[data-test="title"]');
        this._cancelButton = this.page.locator('[data-test="cancel"]');
        this._continueButton = this.page.locator('[data-test="continue"]');
        this._firstName = this.page.locator('[data-test="firstName"]');
        this._lastName = this.page.locator('[data-test="lastName"]');
        this._postalCode = this.page.locator('[data-test="postalCode"]');
    }

    async checkout(firstname: string, lastname: string, postalCode: string) {
        await this._firstName.click();
        await this._firstName.fill(firstname);
        await this._lastName.click();
        await this._lastName.fill(lastname);
        await this._postalCode.click();
        await this._postalCode.fill(postalCode);
        await this._continueButton.click();
    }

    get title(): Locator {
        return this._title;
    }

    get cancelButton(): Locator {
        return this._cancelButton;
    }

}