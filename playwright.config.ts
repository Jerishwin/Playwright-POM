import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],
  //fullyParallel:true,

  use: {
    browserName: 'firefox',
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
    trace: 'on',
    screenshot: 'only-on-failure',
    video:'on'
  }

});
