import type {Page,Locator} from '@playwright/test';

export class  DashboardPage{
    readonly page:Page;
    readonly dashBoardTitle:Locator;
    readonly quickLaunch:Locator;
    readonly timeAtWorkCard:Locator;
    readonly profileLink:Locator;
    readonly logoutLink:Locator;

    constructor(page:Page){
        this.page = page;
        this.dashBoardTitle=page.locator('h6')
        this.profileLink = page.locator("//span[@class='oxd-userdropdown-tab']")
        this.quickLaunch = page.getByText('Quick Launch')
        this.timeAtWorkCard = page.getByText('Time At Work')
        this.logoutLink = page.locator("//ul[@class='oxd-dropdown-menu']/li[4]")
    }

    async logout(){
        await this.profileLink.click()
        await this.logoutLink.click()
    }

}

