import { test, expect } from '@playwright/test';

test('tyler', async ({ page, browserName }) => {
    test.skip(browserName !== 'firefox', 'Run only on firefox');
    await page.goto('https://d.hr.dmerej.info/add_employee');
    // await page.fill('input:right-of(:text("Name"))', 'Peter');

    await page.fill('[name=name]','Remi');
    await page.fill('[name=email]', 'cce@yahho.com');
    await page.fill('[name=address_line1]', 'addr1');
    await page.fill('[name=address_line2]', 'addr2');
    await page.fill('[name=city]', 'paris');
    await page.fill('[name=zip_code]', '744');
    await page.fill('[name=hiring_date]', '4 mars');
    await page.fill('[name=job_title]', 'marchand');
    await page.locator('button:has-text("Add")').click();
  
    await page.goto('https://d.hr.dmerej.info/employees');
    const html = await page.innerHTML('td:has-text("Remi")');
    await expect(html).toBe('Remi');  
});