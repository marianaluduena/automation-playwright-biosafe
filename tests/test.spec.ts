import { test, expect } from "@playwright/test";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";

let landingPage: LandingPage;
let signUpPage: SignUp;

test('Find and click register btn', async ({ page }) => {

  landingPage = new LandingPage(page);
  signUpPage = new SignUp(page);

  // Go to Signup Page

  await landingPage.goToSignUpPage();

  // Fill the signup form

  await signUpPage.fillSignUpForm("Sara","gomez@fake.com","saraEsRata2!");

  await page.waitForTimeout(5000);
});