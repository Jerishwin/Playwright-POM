import {test as base,expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

type Fixtures = {
    loginPage:LoginPage
    dashboardPage:DashboardPage
}

export const test = base.extend<Fixtures>({

    loginPage: async({page},use)=>{
        await use(new LoginPage(page))
    },

    dashboardPage: async({page},use)=>{
        await use(new DashboardPage(page))
    }
})

export {expect}