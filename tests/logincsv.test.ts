import{test,expect} from '../fixtures/baseFixture.js'
import{readLoginData,type LoginUser}from '../utils/csvReader.js'

const users: LoginUser[]=readLoginData()

console.log("CSV Data",users)

const validUser = users.find(user=>user.type==='valid')
const invalidUser = users.find(user=>user.type==='invalid')

test.describe('Csv Login @orange',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
    })

     test("Valid Csv Login @login @csv",async({loginPage,dashboardPage})=>{

        if(!validUser){
            throw new Error("Valid user not Found")
        }
        await loginPage.login(
            validUser.username,
            validUser.pass
        )
        await expect(dashboardPage.dashBoardTitle).toContainText('Dashboard')
    })

    test("Invalid Csv Login @login @csv",async({loginPage})=>{

        if(!invalidUser){
            throw new Error("Invalid user not Found")
        }

        await loginPage.login(
            invalidUser.username,
            invalidUser.pass
        )

        await expect(loginPage.errorMessage).toHaveText('Invalid credentials')
    })
})