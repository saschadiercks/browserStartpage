import { test, expect } from "@playwright/test";

//which modal to test for?
const modalSelector = "#linksasmodal";

test("modal", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("/");

  // find modal link
  await page.locator(`a[data-target="${modalSelector}"]`).click();

  // open modal
  expect(page.locator(`${modalSelector} .modal-overlay`)).toBeVisible;

  // click on uncritical element to wait until the animation is done
  await page.locator(`${modalSelector} .modal-header`).click();

  // take a screenshot
  test.slow(); // give time to fetch
  expect(await page.screenshot()).toMatchSnapshot("open.png", {
    threshold: 0.3
  });

  // click on close button to hide modal
  await page
    .locator(`button.js-modal-trigger[data-target="${modalSelector}"]`)
    .click();

  expect(page.locator(`${modalSelector} .modal-overlay`)).toBeHidden;
});
