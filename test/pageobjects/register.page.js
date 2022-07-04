const Page = require('./page');

class RegisterPage extends Page {
    get getFirstNameInput () {
        return $('[formcontrolname="firstName"]');
    }

    async setFirstNameInputValue (value) {
        await this.getFirstNameInput
        .setValue(value);
    }

    get getLastNameInput () {
        return $('[formcontrolname="lastName"]');
    }

    async setLastNameInputValue (value) {
        await this.getLastNameInput
        .setValue(value);
    }

    get getEmailInput () {
        return $('[formcontrolname="email"]');
    }

    async setEmailInputValue (value) {
        await this.getEmailInput
        .setValue(value);
    }

    get getPasswordInput () {
        return $('[formcontrolname="password"]');
    }

    async setPasswordInputValue (value) {
        await this.getPasswordInput
        .setValue(value);
    }

    get getConfirmPasswordInput () {
        return $('[formcontrolname="confirmPassword"]');
    }

    async settConfirmPasswordInputValue (value) {
        await this.getConfirmPasswordInput
        .setValue(value);
    }

    get getAgreeChb () {
        return $('[class="p-checkbox-box"]');
    }

    async clickAgreeChb () {
        await this.getAgreeChb
        .click();
    }

    get getSubmitBtn () {
        return $('[class="p-element primary-btn-full p-button p-component"]');
    }

    async clickSubmitBtn () {
        await this.getSubmitBtn
        .click();
    }
}

module.exports = new RegisterPage();
