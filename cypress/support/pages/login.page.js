class LoginPage{
    get UserName() {return cy.get('[data-test="username"]')}
    get PasswordInput() {return cy.get('[data-test="password"]')}
    get LoginButton() {return cy.get('[data-test="login-button"]')}
    get WarningErrror() {return cy.get('[data-test="error"]')}

    fill_login(user, password){
        this.UserName.type(user);
        this.PasswordInput.type(password);
        this.LoginButton.click();
    }

    clear(){
        this.UserName.clear();
        this.PasswordInput.clear();
    }
}

export default new LoginPage();