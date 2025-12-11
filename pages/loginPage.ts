import { Page } from '@playwright/test';

export default class LoginPage {  
  constructor(private page: Page) {}
  
  async login() {
    await this.page.goto('https://sandbox-login.brighthr.com/login/');  
     await this.page.getByRole('textbox', { name: 'Email address' }).click();
     await this.page.getByRole('textbox', { name: 'Email address' }).fill('divyeshaero@gmail.com');
     await this.page.getByRole('textbox', { name: 'Password visibility' }).click();
     await this.page.getByRole('textbox', { name: 'Password visibility' }).fill('Bright@32711');
     await this.page.getByTestId('login-button').waitFor({ state: 'visible' });
     await this.page.getByTestId('login-button').click();

  }
}