import { test, expect } from "@playwright/test";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";

let landingPage: LandingPage;
let signUpPage: SignUp;

test('Find and click register btn', async ({ page }) => {

  landingPage = new LandingPage(page);
  signUpPage = new SignUp(page);

  await page.goto('https://qa.biosafeapp.com');

  await landingPage.btnRegister.click();
  expect(page.url()).toBe('https://qa.biosafeapp.com/signup');

// Signup page test: Fill the form

await signUpPage.name.fill("Jasmine");
await signUpPage.email.fill("jasmine@fake.com");
await signUpPage.passWord.fill("Princ3ss!");
await signUpPage.confimPassWord.fill("Princ3ss!");
await signUpPage.signUpBtn.click();

await page.waitForTimeout(5000);
});