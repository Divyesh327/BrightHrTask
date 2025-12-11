import { Page } from '@playwright/test';

export default class DashboardPage {  
  constructor(private page: Page) {}

  async clickOnEmployeeButton()
  {
    await this.page.getByRole('link', { name: 'Employees' }).click();
  }

}