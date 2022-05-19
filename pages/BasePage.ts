import { Page } from "playwright";

export class BasePage {

  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async getText(selector: any) {
    return this.page.$eval(selector, (element) => element.textContent);
  }

  async setText(selector: any, value: string) {
    await this.page.fill(selector, value);
  }

  async submitForm() {
    await this.page.click(`button[type="submit"]`);
  }

  async isElementVisible(selector: any, timeout = 3000) {
    return this.page
      .waitForSelector(selector, { timeout: timeout })
      .then(() => true)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
  async isElementInvisible(selector: any, timeout = 5000) {
    return this.page
      .waitForSelector(selector, { timeout: timeout, state: "hidden" })
      .then(() => true)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  async getUrl() {
    return this.page.url();
  }

}
