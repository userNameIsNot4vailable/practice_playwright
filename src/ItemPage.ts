import { expect, type Locator, type Page } from '@playwright/test';

export class ItemPage {
    private readonly page: Page;
    private readonly _backToProducts: Locator;
    private readonly _inventoryContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this._backToProducts = this.page.locator('[data-test="back-to-products"]');
        this._inventoryContainer = this.page.locator('[data-test="inventory-container"]');
    }

    async removeItemFromCart() {
        await this._inventoryContainer.first().getByRole('button', { name: 'Remove' }).click();
    }

    async addItemToCart() {
        await this._inventoryContainer.first().getByRole('button', { name: 'Add to cart' }).click();
    }

    async backToProducts() {
        await this._backToProducts.click();
    }

    get inventoryContainer(): Locator {
        return this._inventoryContainer;
    }

}