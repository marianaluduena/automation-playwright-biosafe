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

    async fillSignUpForm(name: string, email: string, passWord: string){

    // Signup page test: Fill the form

    await this.name.fill(name);
    const uniqueMail = email.replace("@", "+" + Date.now() + "@");
    await this.email.fill(uniqueMail);
    await this.passWord.fill(passWord);
    await this.confimPassWord.fill(passWord);
    await this.signUpBtn.click();

    // The message should be visible
    await expect(this.successMessage).toBeVisible();
}
}