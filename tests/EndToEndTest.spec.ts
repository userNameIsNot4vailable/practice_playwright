import { test, expect } from '@playwright/test';
import {LoginPage} from "../src/LoginPage";
import {ProductsPage} from "../src/ProductsPage";
import {ItemPage} from "../src/ItemPage";
import {CheckoutPage} from "../src/CheckoutPage";
import {CompletePage} from "../src/CompletePage";
import {OverviewPage} from "../src/OverviewPage";
import {ShoppingCart} from "../src/ShoppingCart";

test('end to end test case', async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(page);
  const productsPage: ProductsPage = new ProductsPage(page);
  const itemPage: ItemPage = new ItemPage(page);
  const checkoutPage: CheckoutPage = new CheckoutPage(page);
  const completePage: CompletePage = new CompletePage(page);
  const overviewPage: OverviewPage = new OverviewPage(page);
  const shoppingCart: ShoppingCart = new ShoppingCart(page);

  await loginPage.goto();
  await expect(loginPage.loginButton).toBeVisible();

  await loginPage.logIn('standard_user', 'secret_sauce');
  await expect(productsPage.productsTitle).toBeVisible();

  await productsPage.checkItem('Sauce Labs Onesie');
  await expect(itemPage.inventoryContainer).toBeVisible();
  await itemPage.addItemToCart();
  await itemPage.backToProducts();
  await expect(productsPage.productsTitle).toBeVisible();

  await productsPage.addItemToCart('Sauce Labs Fleece Jacket');
  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.addItemToCart('Sauce Labs Bike Light');
  await productsPage.removeItemFromCart('Sauce Labs Backpack');
  await productsPage.goToShoppingCart();
  await expect(shoppingCart.description).toBeVisible();

  await shoppingCart.removeItemByName('Sauce Labs Onesie');
  await shoppingCart.checkout();
  await expect(checkoutPage.title).toBeVisible();

  await checkoutPage.checkout('test', 'User', '3333');
  await expect(overviewPage.title).toBeVisible();

  await overviewPage.finishCheckout();
  await expect(completePage.title).toBeVisible();
  await expect(completePage.completeHeader).toBeVisible();

  await completePage.goBackHome();
  await expect(productsPage.sortContainer).toBeVisible();

});
