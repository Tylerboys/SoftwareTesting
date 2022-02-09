import { expect, Locator, Page } from '@playwright/test';
import { Team } from './team';


export class TeamsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://d.hr.dmerej.info/teams');
    }

    async hasName(name: string){
        const nameFound = await this.page.innerHTML(`td:has-text("${name}")`);
        if (name == nameFound) {
            return true;
        } else {
            return false;
        }
    }
}
