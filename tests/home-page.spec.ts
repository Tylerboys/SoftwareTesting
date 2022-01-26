import { test, expect } from '@playwright/test';

test.describe('When I am on the homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://d.hr.dmerej.info/');
  });
  test('click on the List Employees, I go to the list of employees', async ({ page }) => {
    await page.locator('text=List Employees').click();
    await expect(page).toHaveTitle(/Employees/);
  });
  
  test('click on the List Teams, I go to the list of teams', async ({ page }) => {
    await page.locator('text=List Teams').click();
    await expect(page).toHaveTitle(/Teams/);
  });
  
  test('click on the link Reset database I go to the Reset database page', async ({ page }) => {
    await page.locator('text=Add new employee').click();
    await expect(page).toHaveTitle(/Add new employee/);
  });
  
  test('click on the link Add new Employee I go to to the Add employee page', async ({ page }) => {
    await page.locator('text=Add new employee').click();
    await expect(page).toHaveTitle(/Add new employee/);
  });
  
})
