import { test, expect } from "@playwright/test";
test("test", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("http://localhost:8080/");

  // click second tab
  await page.locator(".tablist .tablist__item:nth-child(2) a").click();

  // is the url updated
  await expect(page).toHaveURL("http://localhost:8080/#tab-2");

  // do the rtabs react in a correct manner?
  await expect(page.locator("#tab-1")).toBeHidden;
  await expect(page.locator("#tab-2")).toBeVisible;
});
