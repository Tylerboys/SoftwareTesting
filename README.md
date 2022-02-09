# Software testing project

## Delivrables
### Log Book

#### 18/01/2022
- Writing the test plan
- Validate the test
- Find various bugs


#### 26/01/2022
- Test manually the version 1.0.2 with the test plan
- Begin the test automation with Playwright 
- Implement tests for home page and test for adding a new employee


#### 09/02/2022
- Add tests for create a team
- Refacto using [page object model](https://playwright.dev/docs/test-pom)


### Test plan

Our test plan regroups manual tests for version 1.0.1 and version 1.0.2 ([link](https://efrei365net-my.sharepoint.com/:x:/g/personal/tyler_boyeka_efrei_net/Eb0jwi9SWNJOrAB2Ony3P_YB1dx0SULbsTYVjB67XFSQtw?rtime=AZRQtuTr2Ug))

#### Implementation 

| Page | Description | Implementation |
| :---: | :---: | :---: |
| Home Page | When I click on "List Employees" | Yes 
| | When I click on "Add new employee" | Yes |
| | When I click on "List teams" | Yes |
| | When I click on "Add new team" | Yes |
| | When I click on "Reset database" | Yes |
| | When I click on "Home" | No |
| | When I enter a wrong path | No |
| List Employees Page | When I delete a employee | No |
| | When I delete a employee| No |
| | When I click "Home"| No |
| New employee Page | When I fill the form with incorrect email format | No |
| | When I fill an employee | Yes |
| | When I fill the hiring date with an incorrect input | No |
| | When I submit the form without all inputs filled | No |
| Edit employee page | When I add a employee to a team | No |
| | When modify the zipcode | No |
| | When I add the employee to a empty team | No |
| | When modify the city | No |
| | When modify the address1 | No |
| | When modify the address2 | No |
| | When modify the city with nothing inside | No |
| | When modify the address1 with nothing inside| No |
| | When modify the address2 with nothing inside| No |
| List teams page | When I click on "view members" | No |
| | When I click on "Home" | No |
| | When I click on "delete" | No |
| Create teams page | When I submit a new team | Yes |
| | When I put an empty team name | No |
| | When I click on "Home" | No |

## Run test 

Before launching tests, make sure to have all dependencies using ``npm install``.

You can run tests and get the report testing by using this command : ``npm run test``
