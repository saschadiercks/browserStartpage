import { test, expect } from "@playwright/test";

const sidebarSelector = "#bookmarks";
const collapseSelector = "#collapse-frontend";

test("Sidebar", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("http://localhost:8080/");

  // Click text=🔖
  await page
    .locator(`#application-header button[data-target="${sidebarSelector}"]`)
    .click();

  // Click on the sidebar to make sure it is stable
  await page.locator(`${sidebarSelector} .flyout-title`).click();

  // Open collapse
  await page.locator(`${collapseSelector} .js-collapse-trigger`).click();
  expect(page.locator(`${collapseSelector}`)).toBeVisible;

  // take a screenshot
  expect(await page.screenshot()).toMatchSnapshot("sidebar.png", {
    threshold: 0.3
  });

  // close collapse
  await page.locator(`${collapseSelector} .js-collapse-trigger`).click();

  // close sidebar
  await page.locator(`${sidebarSelector} .flyout-close`).click();
  expect(page.locator(`${sidebarSelector}`)).toBeHidden;
});
