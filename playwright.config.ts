import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

//const envName = process.env.ENV||'chrome';
//dotenv.config({ path: `./env/.env.${envName}` });


export default defineConfig({
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],
  //fullyParallel:true,
  //timeout:50000,
  use: {
    browserName:process.env.BROWSER || 'chromium',
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
    trace: 'on',
    screenshot: 'only-on-failure',
    video:'on',
    //actionTimeout:1000,
    //navigationTimeout:1000
  }

});
