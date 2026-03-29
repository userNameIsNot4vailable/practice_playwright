import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly _productsTitle: Locator;
    private readonly _sortContainer: Locator;
    private readonly _shoppingCartLink: Locator;
    private readonly _inventoryItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this._productsTitle = this.page.locator('[data-test="title"]');
        this._sortContainer = this.page.locator('[data-test="product-sort-container"]');
        this._shoppingCartLink = this.page.locator('[data-test="shopping-cart-link"]');
        this._inventoryItems = this.page.locator('.inventory_item');
    }

    async addItemToCart(productName: string) {
        const item = this._inventoryItems.filter({ hasText: productName });
        await item.getByRole('button', { name: 'Add to cart' }).click();
    }

    async removeItemFromCart(productName: string) {
        const item = this._inventoryItems.filter({ hasText: productName });
        await item.getByRole('button', { name: 'Remove' }).click();
    }

    async goToShoppingCart() {
        await this._shoppingCartLink.click();
    }

    async checkItem(productName: string) {
        const item = this._inventoryItems.filter({ hasText: productName });
        await item.getByRole('img', { name: productName }).click();
    }

    async sortItems(sortBy: string) {
        await this._sortContainer.selectOption(sortBy);
    }

    get productsTitle(): Locator {
        return this._productsTitle;
    }

    get sortContainer(): Locator {
        return this._sortContainer;
    }

}