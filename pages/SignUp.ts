import { Page, Locator,expect } from "@playwright/test";

export default class SignUp {

    // readonly means this element could only be read
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly passWord: Locator;
    readonly confimPassWord: Locator;
    readonly signUpBtn: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;
        this.name = page.getByTestId('nameInput');
        this.email = page.getByTestId('emailInput');
        this.passWord = page.getByTestId('passwordInput');
        this.confimPassWord = page.getByTestId('confirmPasswordInput');
        this.signUpBtn = page.getByTestId('botonRegistro');
        this.successMessage = page.getByText('¡Registro exitoso!');

    }

    async fillSignUpForm(){

    // Signup page test: Fill the form

    await this.name.fill("Sven");
    await this.email.fill("sv3n@fake.com");
    await this.passWord.fill("RainDeer2!");
    await this.confimPassWord.fill("RainDeer2!");
    await this.signUpBtn.click();

    // The message should be visible
    await expect(this.successMessage).toBeVisible();
}
}