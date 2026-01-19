import HomePage from '../support/pages/home.page'
import LoginPage from '../support/pages/login.page';
import CartPage from '../support/pages/cart.page';

describe('Feature: Check cart informations', ()=>{
    /*Scenario: Add item to the cart
        Given that  I am logged in with the standard_user
        When I add some item to the cart 
        And acess the shopping cart menu 
        Then the item must been listed */
    it('Add item to the shopping cart', ()=>{
        //Given
        cy.visit('/');
        LoginPage.fill_login('standard_user', 'secret_sauce');

        //When
        HomePage.getAddToCartButtonItem('bike-light').click();         
        HomePage.CartButton.click();

        //Then
        CartPage.ItemName.should('contain', 'Bike Light');
        cy.screenshot();
    });

    /*Scenario: Check the item price
        Given that I am logged in with the standard_user
        When I add some item to the shopping cart
        Then the item price in the shopping cart must be the same that was listed on the home page*/
    it('Check item price', ()=>{
        //Given
        cy.visit('/');
        LoginPage.fill_login('standard_user', 'secret_sauce');

        //When
        var itemPrice = HomePage.getItemPrice(1);
        HomePage.getAddToCartButtonItem('backpack').click();
        HomePage.CartButton.click();

        //Then
        CartPage.ItemPrice.should('eq', itemPrice);
        cy.screenshot();

    });
})