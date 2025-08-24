
import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async addOrderDetails(name: string, country: string, city: string, creditCard: string, month: string, year: string){
  await this.page.getByRole('textbox', { name: 'Total: 400 Name:' }).click();
  await this.page.getByRole('textbox', { name: 'Total: 400 Name:' }).fill(name);
  await this.page.getByRole('textbox', { name: 'Country:' }).click();
  await this.page.getByRole('textbox', { name: 'Country:' }).fill(country);
  await this.page.getByRole('textbox', { name: 'City:' }).click();
  await this.page.getByRole('textbox', { name: 'City:' }).fill(city);
  await this.page.getByRole('textbox', { name: 'Credit card:' }).click();
  await this.page.getByRole('textbox', { name: 'Credit card:' }).fill(creditCard);
  await this.page.getByRole('textbox', { name: 'Month:' }).click();
  await this.page.getByRole('textbox', { name: 'Month:' }).fill(month);
  await this.page.getByRole('textbox', { name: 'Year:' }).click();
  await this.page.getByRole('textbox', { name: 'Year:' }).fill(year);
  await this.page.getByRole('button', { name: 'Purchase' }).click();
  await this.page.getByRole('button', { name: 'OK' }).click();
}
}
