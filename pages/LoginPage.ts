import { Page } from "playwright";
import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
  usernameInput = `input[data-test="username"]`
  passwordInput = `input[data-test="password"]`
  loginButton = `input[data-test="login-button"]`

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async login(){
    this.isElementVisible(this.loginButton)
    this.setText(this.usernameInput, "standard_user");
    this.setText(this.passwordInput, "secret_sauce");
    this.page.click(this.loginButton);
  }
}
