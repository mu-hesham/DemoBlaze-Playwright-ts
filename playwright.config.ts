
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    video: 'on',
    launchOptions: {
    slowMo: 500, // Delay actions by 500ms
    },

    screenshot: 'on',
    trace: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]]
});
