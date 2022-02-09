import { test, expect } from '@playwright/test';
import { AddTeamPage } from './add-team.page';
import { TeamsPage } from './teams.page';
import { Team } from './team';

test.describe('When I am on the add teams page', () => {
    test('Add new team with all inputs filled', async ({ page, browserName }) => {
        test.skip(browserName !== 'firefox', 'Run only on firefox');

        const team: Team = {
            name: 'Equipe21',
        }

        const addTeamPage = new AddTeamPage(page);
        await addTeamPage.goto();
        await addTeamPage.add(team);

        const teamsPage = new TeamsPage(page);
        await teamsPage.goto();

        const hasName = await teamsPage.hasName(team.name);
        expect(hasName).toBe(true);
    });
});