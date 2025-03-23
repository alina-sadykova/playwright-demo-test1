import { expect, test } from "@playwright/test";

/*
Go to 'https://www.facebook.com/'
Click on "Create new account" link
Validate the url contains "login"
*/
test("Facebook new account - validate the url has login", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.getByTestId("open-registration-form-button").click();
  const currentUrl = page.url();
  expect(currentUrl).toContain("login");
});
