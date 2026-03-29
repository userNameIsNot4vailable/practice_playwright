import { expect, type Locator, type Page } from '@playwright/test';

export class CompletePage {
    private readonly page: Page;
    private readonly _title: Locator;
    private readonly _backHomeButton: Locator;
    private readonly _completeHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this._title = this.page.locator('[data-test="title"]');
        this._backHomeButton = this.page.locator('[data-test="back-to-products"]');
        this._completeHeader = this.page.locator('[data-test="complete-header"]');
    }

    async goBackHome() {
        await this._backHomeButton.click();
    }

    get title(): Locator {
        return this._title;
    }

    get completeHeader(): Locator {
        return this._completeHeader;
    }

}