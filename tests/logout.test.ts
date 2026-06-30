import {test,expect} from '../fixtures/baseFixture.js'
import loginData from '../test-data/loginData.json'with {type:'json'};

test.describe("Logout Test @orange",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    })

    test("Log Out @logout",async({dashboardPage,loginPage})=>{

        await expect(dashboardPage.quickLaunch).toBeVisible();
        await dashboardPage.logout()

        await expect(loginPage.loginTitle).toContainText("Login")
    })
})