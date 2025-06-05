import{Page, Locator} from "@playwright/test";

export default class LandingPage{

    // readonly means this element could only be read
    readonly page: Page;

    constructor(page: Page){

        this.page = page;
    }
}