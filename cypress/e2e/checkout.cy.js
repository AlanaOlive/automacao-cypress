import HomePage from '../support/pages/home.page'
import LoginPage from '../support/pages/login.page';
import CartPage from '../support/pages/cart.page';
import CheckoutPage from '../support/pages/checkout.page';

describe('Feature: Checkout', ()=> {
    /*Scenario: Successful product purchase
        Given I am logged in as a "standard_user"
        And I have a product in the shopping cart
        When I proceed to checkout and provide my personal information
        Then I should be able to confirm the order summary
        And I should see the "Checkout: Complete!" confirmation message */
    it('Succesfully checkout - User standard', () =>{
        //Given
        cy.visit('/'); 
        LoginPage.fill_login('standard_user', 'secret_sauce'); 
        //When
        HomePage.getAddToCartButtonItem('bike-light').click(); 
        HomePage.CartButton.click();
        CartPage.CheckoutButton.click();

        CheckoutPage.TitlePage.should('contain', 'Checkout: Your Information');
        CheckoutPage.fillCheckoutInformations('Alana', 'Oliveira', '12345');
        CheckoutPage.ContinueButton.click();
        //Then
        CheckoutPage.TitlePage.should('contain', 'Checkout: Overview'); 
        CheckoutPage.FinishCheckoutButton.click();
        CheckoutPage.TitlePage.should('contain', 'Checkout: Complete!')
        cy.screenshot();
    });

    /*Scenario: Blocked checkout 
        Given I am logged in as a 'standard_user'
        And a have a product in the shopping cart
        When i proceed to checkout i miss inputing some personal information
        Then the website must block the checkout and present a warning message*/
    it('Blocked checkout - missing personal infos', ()=>{
        //Given
        cy.visit('/');
        LoginPage.fill_login('standard_user', 'secret_sauce');

        HomePage.getAddToCartButtonItem('bolt-t-shirt').click();
        HomePage.CartButton.click();
        CartPage.CheckoutButton.click();

        // When
        CheckoutPage.TitlePage.should('contain', 'Checkout: Your Information');
        CheckoutPage.FirstNameInput.type('Alana');
        CheckoutPage.LastNameInput.type('Oliveira');
        CheckoutPage.ContinueButton.click();

        //Then
        CheckoutPage.ErrorMessage.should('be.visible');
        cy.screenshot();
    });
    

})