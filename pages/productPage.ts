
import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}


    async addProductToCart(){

      await this.page.locator('//a[text()="Monitors"]').click();
      await this.page.getByRole('link', { name: 'Apple monitor' }).click();
      await expect(this.page.locator('h2')).toContainText('Apple monitor 24');
      this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
      });

      await this.page.getByRole('link', { name: 'Add to cart' }).click();
      await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
      await expect(this.page.locator('#tbodyid')).toContainText('Apple monitor 24');
      await this.page.getByRole('button', { name: 'Place Order' }).click();
      
    }
    
    


  }



