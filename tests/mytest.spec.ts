import { test, expect} from '@playwright/test';
test("Verify page title",async ({page}) => {
  await page.goto("http://www.automationpractice.pl/index.php");
  console.log("Title:",await page.title());
  await expect(page).toHaveTitle("My Shop");
})