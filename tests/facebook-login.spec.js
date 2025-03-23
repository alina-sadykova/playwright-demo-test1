import { expect, test } from "@playwright/test";

/*
Go to 'https://www.facebook.com/'
Fill username as 'johndoe@gmail.com'
Fill password as 'john1234'
Click on "Log In"
Validate "The password you've entered is incorrect." error message is visible
*/

test("Facebook Login - validate error for invalid credentials", async ({
  page,
}) => {
  await page.goto("https://www.facebook.com/");
  await page.getByTestId("royal-email").fill("johndoe@gmail.com");
  await page.getByTestId("royal-pass").fill("john1234");
  await page.getByTestId("royal-login-button").click();

  await expect(page.locator("._9ay7")).toBeVisible();
});
