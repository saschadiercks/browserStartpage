import { test, expect } from "@playwright/test";

const sidebarSelector = "#bookmarks";
const collapseSelector = "#bookmarks details:first-of-type";

test("Sidebar", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("/");

  // Sidebar
  await page
    .locator(`#application-header button[data-target="${sidebarSelector}"]`)
    .click();

  // Click on the sidebar to make sure it is stable
  await page.locator(`${sidebarSelector} .flyout-title`).click();

  // take a screenshot
  test.slow(); // give time to fetch
  expect(await page.screenshot()).toMatchSnapshot("sidebar.png", {
    maxDiffPixels: 10
  });

  // Open collapse
  await page.locator(`${collapseSelector}`).click();
  expect(page.locator(`${collapseSelector} .list-vertical`)).toBeVisible;

  // close collapse
  await page.locator(`${collapseSelector} summary`).click();
  expect(page.locator(`${collapseSelector} .list-vertical`)).toBeHidden;

  // close sidebar
  await page.locator(`${sidebarSelector} .flyout-close`).click();
  expect(page.locator(`${sidebarSelector}`)).toBeHidden;
});
