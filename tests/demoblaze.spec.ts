
import { test, expect } from '@playwright/test';
import { Navbar } from '../pages/navbar';
import { SignupPage } from '../pages/signupPage';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

test.describe('Demoblaze Automation', () => {

  test('Scenario 1: Register new user', async ({ page }) => {
    const navbar = new Navbar(page);
    const signup = new SignupPage(page);

    await navbar.gotoHome();
    await navbar.openSignUp();
    await signup.register('hesham123', 'Password123');
  });

  test('Scenario 2: Login with valid credentials', async ({ page }) => {
    const navbar = new Navbar(page);
    const login = new LoginPage(page);

    await navbar.gotoHome();
    await navbar.openLogin();
    await login.login('hesham1', 'hesham1');
    await expect(page.locator('#logout2')).toBeVisible();
  });

  test('Scenario 3: Logout', async ({ page }) => {
    const navbar = new Navbar(page);
    const login = new LoginPage(page);

    await navbar.gotoHome();
    await navbar.openLogin();
    await login.login('hesham1', 'hesham1');
    await navbar.logout();
    await expect(page.locator('#login2')).toBeVisible();
  });

  test('Scenario 4: Create an order for Apple monitor 24', async ({ page }) => {
    const navbar = new Navbar(page);
    const login = new LoginPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await navbar.gotoHome();
    await navbar.openLogin();
    await login.login('hesham1', 'hesham1');
    await product.addProductToCart();
    await cart.addOrderDetails('hesham','egypt','cairo','123456789','10','2028');
  });

});
