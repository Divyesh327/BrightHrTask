import { Page } from '@playwright/test';

export default class EmployeePage {  
  constructor(private page: Page) {}

  async addEmployee()
  {
  await this.page.getByRole('button', { name: 'Add employee' }).click();
  await this.page.locator('.w-5').click();
  await this.page.getByRole('textbox', { name: 'First name' }).click();
  await this.page.getByRole('textbox', { name: 'First name' }).fill('Alex');
  await this.page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await this.page.getByRole('textbox', { name: 'Last name' }).fill('Scott');
  await this.page.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await this.page.getByRole('textbox', { name: 'Email address' }).fill('alex123211@xyz.com');
  await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).click();
  await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).fill('07123001251');
  await this.page.locator('.sc-jtRfpW').click();
  await this.page.getByLabel('Thu Dec 04').getByText('4').click();
  await this.page.getByRole('textbox', { name: 'Job title (optional)' }).click();
  await this.page.getByRole('textbox', { name: 'Job title (optional)' }).fill('Quality Engineer');
  await this.page.getByRole('button', { name: 'Save new employee' }).click();
  await this.page.getByRole('button', { name: 'Add another employee' }).click();
  await this.page.getByRole('textbox', { name: 'First name' }).click();
  await this.page.getByRole('textbox', { name: 'First name' }).fill('Max');
  await this.page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await this.page.getByRole('textbox', { name: 'Last name' }).fill('Reynolds');
  await this.page.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await this.page.getByRole('textbox', { name: 'Email address' }).fill('max012310@abc.com');
  await this.page.locator('.border.relative').click();
  await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).click();
  await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).fill('01234562145');
  await this.page.locator('circle').nth(3).click();
  await this.page.locator('.sc-fAjcbJ').click();
  await this.page.getByText('4', { exact: true }).click();
  await this.page.getByRole('textbox', { name: 'Job title (optional)' }).click();
  await this.page.getByRole('textbox', { name: 'Job title (optional)' }).fill('Product Owner');
  await this.page.getByRole('button', { name: 'Save new employee' }).click();
  await this.page.getByRole('link', { name: 'Go to profile' }).click();
  await this.page.getByRole('link', { name: 'Back to employee hub' }).click();
  }

}