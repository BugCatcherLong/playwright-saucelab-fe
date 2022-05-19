import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  reporter: "list",
  use: {
    screenshot: "only-on-failure",
    baseURL: "https://www.saucedemo.com/",
    headless: true, // always run them in headless mode unless debugging
    trace: "on-first-retry",
    launchOptions: {
      slowMo: 0,
      chromiumSandbox: false,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
