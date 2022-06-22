import { test, expect } from "@playwright/test";

test("Render", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("/");

  // take a screenshot
  test.slow(); // give time to fetch
  expect(await page.screenshot()).toMatchSnapshot("render.png", {
    threshold: 0.3
  });
});
