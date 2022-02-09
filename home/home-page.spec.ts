import { test, expect } from '@playwright/test';
import { HomePage } from './home.page';

test.describe('When I am on the homepage', () => {
  
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  });
  test('click on the List Employees, I go to the list of employees', async ({ page }) => {
    const homePage = new HomePage(page);
    const employeePage = await homePage.gotoEmployeesPage();
    await expect(employeePage).toHaveTitle(/Employees/);
  });
  
  test('click on the List Teams, I go to the list of teams', async ({ page }) => {
    const homePage = new HomePage(page);
    const teamsPage = await homePage.gotoTeamsPage();
    await expect(teamsPage).toHaveTitle(/Teams/);
  });
  
  test('click on the link Reset database I go to the Reset database page', async ({ page }) => {
    const homePage = new HomePage(page);
    const resetPage = await homePage.gotoResetDBPage();
    await expect(resetPage).toHaveTitle(/Reset database/);
  });
  
  test('click on the link Add new Employee I go to to the Add employee page', async ({ page }) => {
    const homePage = new HomePage(page);
    const addEmployeePage = await homePage.gotoAddEmployeePage();
    await expect(page).toHaveTitle(/Add Employee/);
  });
  
})
