import { test, expect } from '@playwright/test';
import {LoginPage} from "../src/login-page";

test('user logs in', async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(page);

  await loginPage.goto();

  await expect(page).toHaveTitle('Swag Labs');
  await expect(loginPage.loginButton).toBeVisible();
  await expect(loginPage.usernameInputField).toBeVisible();
  await expect(loginPage.passwordInputField).toBeVisible();

  await loginPage.logIn('standard_user', 'secret_sauce');
  await expect(page)('Products');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
