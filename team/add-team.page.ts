import { expect, Locator, Page } from '@playwright/test';
import { Team } from './team';


export class AddTeamPage {
    readonly page: Page;
    readonly addButton: Locator
    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator('button:has-text("Add")');
    }

    async goto() {
        await this.page.goto('https://d.hr.dmerej.info/add_team');
    }

    private async fill(team: Team) {
        await this.page.fill('[name=name]', team.name);
    }

    async add(team: Team) {
        await this.fill(team);
        await this.addButton.click();
    }
}
