class CheckoutPage{
    get TitlePage() {return cy.get('[data-test="title"]')}
    get FirstNameInput() {return cy.get('[data-test="firstName"]')}
    get LastNameInput() {return cy.get('[data-test="lastName"]')}
    get PostalCodeInput() {return cy.get('[data-test="postalCode"]')}
    get CancelButton() {return cy.get('[data-test="cancel"]')}
    get ContinueButton() {return cy.get('[data-test="continue"]')}
    get ErrorMessage() {return cy.get('[data-test="error"]')}

    // Finish page
    get CancelCheckoutButton() {return cy.get('[data-test="cancel"]')}
    get FinishCheckoutButton() { return cy.get('[data-test="finish"]')}

    // After finish
    get MessageCheckoutFinished() {return cy.get('[data-test="complete-header"]')}
    get BackHomeButton()  {return cy.get('[data-test="back-to-products"]')}

    fillCheckoutInformations(firstName, lastName, postalCode){
        this.FirstNameInput.type(firstName);
        this.LastNameInput.type(lastName);
        this.PostalCodeInput.type(postalCode);
    }
}

export default new CheckoutPage()