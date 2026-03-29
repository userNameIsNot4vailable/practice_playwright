import {expect, test} from "@playwright/test";
import {LoginPage} from "../src/LoginPage";
import {ProductsPage} from "../src/ProductsPage";

test('login test', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const productPage: ProductsPage = new ProductsPage(page);

    await loginPage.goto();

    await expect(page).toHaveTitle('Swag Labs');
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.usernameInputField).toBeVisible();
    await expect(loginPage.passwordInputField).toBeVisible();

    await loginPage.logIn('standard_user', 'secret_sauce');
    await expect(productPage.productsTitle).toBeVisible();
    await expect(productPage.sortContainer).toBeVisible();
});