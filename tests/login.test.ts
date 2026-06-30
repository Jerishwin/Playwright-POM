import { test,expect} from '../fixtures/baseFixture.js';
import loginData from "../test-data/loginData.json" with { type: "json" } ;

test.describe("Login Test @orange",()=>{

    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
    })

    test("Valid Login @login",async({loginPage,dashboardPage})=>{
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        )
        await expect(dashboardPage.dashBoardTitle).toContainText('Dashboard')
    })

    test("Invalid Login @login",async({loginPage})=>{
        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        )

        await expect(loginPage.errorMessage).toHaveText('Invalid credentials')
    })
})
