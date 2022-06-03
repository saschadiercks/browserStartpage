import { test, expect } from "@playwright/test";

//which modal to test for?
const modalSelector = "#linksasmodal";

test("test", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("http://localhost:8080/");

  // find modal link
  await page.locator(`a[data-target="${modalSelector}"]`).click();

  // open modal
  await page.locator(`${modalSelector} .modal-overlay`).waitFor();
  expect(page.locator(`${modalSelector} .modal-overlay`)).toBeVisible;

  // take a screenshot
  expect(await page.screenshot()).toMatchSnapshot("screenshot.png", {
    threshold: 0.3
  });
});
