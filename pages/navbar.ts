
import { Page } from '@playwright/test';

export class Navbar {
  constructor(private page: Page) {}

  async gotoHome() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openLogin() {
    await this.page.click('#login2');
  }

  async openSignUp() {
    await this.page.click('#signin2');
  }

  async logout() {
    await this.page.click('#logout2');
  }
}
