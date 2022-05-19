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
  it("Login", async () => {
    //Logged in
    await loginPage.isElementVisible(loginPage.loginButton)
    await loginPage.setText(loginPage.usernameInput, "standard_user");
    await loginPage.setText(loginPage.passwordInput, "secret_sauce");
    await loginPage.page.click(loginPage.loginButton);

    //Validate user logged in successfully
    await swagLabsPage.isElementVisible(swagLabsPage.title)
    await swagLabsPage.isElementVisible(swagLabsPage.burgerMenu)
    await swagLabsPage.isElementVisible(swagLabsPage.inventory)
  });
});
