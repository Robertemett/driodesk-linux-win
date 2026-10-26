import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4321",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      testMatch: /(lifecycle|geometry|keyboard)\.spec\.ts/,
      use: devices["Desktop Chrome"],
    },
    {
      name: "chromium-no-javascript",
      testIgnore: /(lifecycle|geometry|keyboard)\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        javaScriptEnabled: false,
      },
    },
  ],
  webServer: {
    command: "npm run dev -- --host 127.0.0.1",
    url: "http://127.0.0.1:4321",
    env: {
      ASTRO_DEV_BACKGROUND: "0",
    },
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
