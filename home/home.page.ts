import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly employeesLink: Locator;
  readonly listTeamsLink: Locator;
  readonly addEmployeeLink: Locator;
  readonly resetDBLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeLink = this.page.locator('text=Add new employee');
    this.employeesLink = this.page.locator('text=List Employees');
    this.listTeamsLink = this.page.locator('text=List Team');
    this.resetDBLink = this.page.locator('text=Reset database');
    
  }

  async goto(){
    await this.page.goto('https://d.hr.dmerej.info/');
  }

  async gotoEmployeesPage(): Promise<Page>{
    await this.employeesLink.click();
    return this.page;
  }

  async gotoTeamsPage(): Promise<Page> {
    await this.listTeamsLink.click();
    return this.page;
  }

  async gotoAddEmployeePage(): Promise<Page> {
    await this.addEmployeeLink.click();
    return this.page;
  }

  async gotoResetDBPage(): Promise<Page> {
    await this.resetDBLink.click();
    return this.page;
  }
}