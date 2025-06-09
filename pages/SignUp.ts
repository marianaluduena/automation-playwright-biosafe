import{Page, Locator} from "@playwright/test";

export default class SignUp{

    // readonly means this element could only be read
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly passWord: Locator;
    readonly confimPassWord: Locator;
    readonly signUpBtn: Locator;
    readonly successMessage: Locator;

    constructor(page: Page){

        this.page= page;
        this.name= page.getByTestId('nameInput');
        this.email= page.getByTestId('emailInput');
        this.passWord= page.getByTestId('passwordInput');
        this.confimPassWord= page.getByTestId('confirmPasswordInput');
        this.signUpBtn= page.getByTestId('botonRegistro');
        this.successMessage= page.getByText('¡Registro exitoso! Revisa tu');

    }
}