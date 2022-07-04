const homePage = require('../pageobjects/home.page');
const joinPage = require('../pageobjects/join.page');
const registerPage = require('../pageobjects/register.page');

describe('Altorney tests', () => {
 const password = "Qwerty123$"

  it('should register with valid credentials', async () => {
    await homePage.open();
    await homePage.clickJoinBtn();
    await joinPage.clickReviewerBtn();
    await registerPage.setFirstNameInputValue(registerPage.generateName());
    await registerPage.setLastNameInputValue(registerPage.generateName());
    await registerPage.setEmailInputValue(registerPage.generateName()+"@gmail.com");
    await registerPage.setPasswordInputValue(password);
    await registerPage.settConfirmPasswordInputValue(password);
    await registerPage.clickAgreeChb();
    await registerPage.clickSubmitBtn();
    await expect(browser).toHaveUrlContaining('https://test.altorney.com/register/success');
  });
});


