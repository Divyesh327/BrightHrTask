import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage'; 
import DashboardPage from '../pages/dashboard';
import EmployeePage from '../pages/employeePage';
import { expect } from '@playwright/test';

test('Adding New Employee', async ({ page }) => {
    
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const employeePage = new EmployeePage(page);  
  const max_employee = page.locator('div.flex.flex-col').filter({ hasText: "Max Reynolds" });
  const alex_employee = page.locator('div.flex.flex-col').filter({ hasText: "Alex Scott" });
  
  await loginPage.login();
  await dashboardPage.clickOnEmployeeButton();
  await employeePage.addEmployee(); 
  await expect(max_employee.getByText("Product Owner")).toBeVisible();
  await expect(alex_employee.getByText("Quality Engineer")).toBeVisible();

});


