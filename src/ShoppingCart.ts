import { expect, type Locator, type Page } from '@playwright/test';

export class ShoppingCart {
    private readonly page: Page;
    private readonly _title: Locator;
    private readonly _description: Locator;
    private readonly _continueShopping: Locator;
    private readonly _checkout: Locator;
    private readonly _cartList: Locator;

    constructor(page: Page) {
        this.page = page;
        this._title = this.page.locator('[data-test="title"]');
        this._description = this.page.locator('[data-test="cart-desc-label"]');
        this._continueShopping = this.page.locator('[data-test="continue-shopping"]');
        this._checkout = this.page.locator('[data-test="checkout"]');
        this._cartList = this.page.locator('[data-test="cart-list"]');
    }

    async removeItemByName(productName: string) {
        const item = this._cartList.filter({ hasText: productName });
        await item.getByRole('button', { name: 'Remove' }).click();
    }

    get title(): Locator {
        return this._title;
    }

    get description(): Locator {
        return this._description;
    }

    async continueShopping() {
        await this._continueShopping.click();
    }

    async checkout() {
        await this._checkout.click();
    }

}