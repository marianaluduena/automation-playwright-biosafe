import { Page, Locator, expect } from "@playwright/test";

export default class LandingPage {

    // readonly means this element could only be read
    readonly page: Page;
    readonly btnRegister: Locator;

    constructor(page: Page) {

        this.page = page;
        this.btnRegister = page.getByRole('link', { name: 'Registrarse' }).nth(1);
    }

    async goToSignUpPage() {

        await this.page.goto('https://qa.biosafeapp.com');

        await this.btnRegister.click();
        expect(this.page.url()).toBe('https://qa.biosafeapp.com/signup');
    }
}