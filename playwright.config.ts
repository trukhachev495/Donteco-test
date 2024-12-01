import { defineConfig } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html']],
  globalTimeout: 600000,
  timeout: 120000,
  use: {
    baseURL: 'https://automationintesting.online/',
    trace: 'on',
    headless: false,
    screenshot: 'only-on-failure'
  }
});
