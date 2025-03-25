import { expect, test } from "@playwright/test";

import { faker } from "@faker-js/faker";

const colorConsole = require("color-console");
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
  // await page.getByTestId("royal-email").fill(faker.internet.email());

  await page.getByTestId("royal-pass").fill("Jogn123");
  // await page.getByTestId("royal-pass").fill(faker.internet.password());

  await page.getByTestId("royal-login-button").click();

  await expect(page.locator("._9ay7")).toBeVisible();
});

test("Testing fake package", () => {
  console.log(faker.music.artist());
  colorConsole.red(faker.music.artist());
  console.log(faker.book.title());
  console.log(faker.animal.cat());
  console.log(faker.company.name());
});
