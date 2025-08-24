
import { Page } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async register(username: string, password: string) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);
    await this.page.click('button[onclick="register()"]');
  }
}
