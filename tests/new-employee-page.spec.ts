import { test, expect } from '@playwright/test';
import { AddEmployeePage } from '../employee/add-employee.page';
import { EmployeesPage } from '../employee/employees.page';
import { Employee } from '../employee/employee';

test('tyler', async ({ page, browserName }) => {
    test.skip(browserName !== 'firefox', 'Run only on firefox');

    const employee: Employee = {
        name: 'Remi',
        email: 'cce@yahho.com',
        address1: 'addr1',
        address2: 'addr1',
        city: 'paris',
        zip_code: '744',
        hiring_date: '4 mars',
        job_title: 'marchan'
    }

    const addEmployeePage = new AddEmployeePage(page);
    await addEmployeePage.goto();
    await addEmployeePage.add(employee);
  
    const employeesPage = new EmployeesPage(page);
    await employeesPage.goto();

    const hasName = await employeesPage.hasName(employee.name);
    expect(hasName).toBe(true);
});