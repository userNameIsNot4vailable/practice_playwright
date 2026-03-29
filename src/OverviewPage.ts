import { expect, type Locator, type Page } from '@playwright/test';

export class OverviewPage {
    private readonly page: Page;
    private readonly _title: Locator;
    private readonly _cancelButton: Locator;
    private readonly _finishButton: Locator;
    private readonly _inventoryList: Locator;
    private readonly _totalPrice: Locator;


    constructor(page: Page) {
        this.page = page;
        this._title = this.page.locator('[data-test="title"]');
        this._cancelButton = this.page.locator('[data-test="cancel"]');
        this._finishButton = this.page.locator('[data-test="finish"]');
        this._inventoryList = this.page.locator('[data-test="firstName"]');
        this._totalPrice = this.page.locator('[data-test="total-info-label"]');
    }

    async finishCheckout() {
        await this._finishButton.click();
    }

    get title(): Locator {
        return this._title;
    }

    get cancelButton(): Locator {
        return this._cancelButton;
    }

}