import { expect, Locator, Page } from '@playwright/test';
import { Employee } from './employee';


export class AddEmployeePage {
  readonly page: Page;
  readonly addButton: Locator
  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator('button:has-text("Add")');
  }

  async goto(){
    await this.page.goto('https://d.hr.dmerej.info/add_employee');
  }

  private async fill(employee: Employee) {
    await this.page.fill('[name=name]', employee.name);
    await this.page.fill('[name=email]', employee.email);
    await this.page.fill('[name=address_line1]', employee.address1);
    await this.page.fill('[name=address_line2]', employee.address2);
    await this.page.fill('[name=city]', employee.city);
    await this.page.fill('[name=zip_code]', employee.zip_code);
    await this.page.fill('[name=hiring_date]', employee.hiring_date);
    await this.page.fill('[name=job_title]', employee.job_title);
  }

  async add(employee: Employee){
    await this.fill(employee);
    await this.addButton.click();
  }
}
