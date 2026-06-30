import {test,expect} from '../fixtures/baseFixture.js'
import loginData from '../test-data/loginData.json' with { type: "json" }
test.describe("DashBoard Test", ()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test.afterEach(async({dashboardPage})=>{
        await dashboardPage.logout();
    });

    test("verify quick Launch @dashboard",async({dashboardPage})=>{
        await expect(dashboardPage.quickLaunch).toBeVisible();
    });

    test("verify Time at work @dashboard",async({dashboardPage})=>{
        await expect(dashboardPage.timeAtWorkCard).toBeVisible();
    });


});