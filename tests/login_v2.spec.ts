import {fixtures} from "../fixtures";
import {SwagLabsPage} from "../pages/SwagLabsPage";
import {LoginPage} from "../pages/LoginPage";

const { it, describe, beforeEach } = fixtures;

let swagLabsPage;
let loginPage;

describe("SauceLabs UI", () => {
  beforeEach(async ({ page }) => {
    swagLabsPage = new SwagLabsPage(page);
    loginPage = new LoginPage(page);

    await page.goto("/");
  });
  it("Verify user able to login and view inventory page @smoke", async () => {
    /**
     * QA-1
     * Scenario : As a consumer,
     * I want to be able to log into the website,
     * So that I can browse the products available
     */
    await loginPage.login();
    await swagLabsPage.assertUserLandsOnInventoryPage();
  });
});
