import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class SwagLabsPage extends BasePage {
  title = `span[class="title"]`
  burgerMenu = `button[id="react-burger-menu-btn"]`
  inventory = `div[id="inventory_container"]`

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async assertUserLandsOnInventoryPage(){
    await this.isElementVisible(this.title)
    await this.isElementVisible(this.burgerMenu)
    await this.isElementVisible(this.inventory)
  }
}
