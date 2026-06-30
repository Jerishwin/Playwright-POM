import {test,expect} from '../fixtures/baseFixture.js'
import { DashboardPage } from '../pages/DashboardPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import loginData from '../test-data/loginData.json'with {type:'json'};

test.describe("Logout Test",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    })

    test("Log Out @logout",async({dashboardPage,loginPage})=>{
        await dashboardPage.logout()

        await expect(loginPage.loginTitle).toContainText("Login")
    })
})