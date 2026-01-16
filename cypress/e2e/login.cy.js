import LoginPage from '../support/pages/login.page' 
import HomePage from '../support/pages/home.page'

describe('Feature: Log in', () => {

  /*Scenerio: Successfull log in
    Given that i access the site
    When i input the username 'standard_user"
    And the password 'secret_sauce'
    Then i must be redirected to the home page */ 
  it('Must log in succesfully - User Standart', () => {
    cy.visit('/'); //Given
   
    LoginPage.fill_login('standard_user', 'secret_sauce'); // When

    cy.url().should('include', '/inventory.html'); // Then
    HomePage.ProductsList.should('be.visible');
    
  });

  /*Scenerio: Locked out log in
    Given that i access the site
    When i input the username 'locked_out_user'
    And the password 'secret_sauce'
    Then i must see an alert abou the blocked access and stay at the login page
 */

  it('Must have the home page access blocked - User locked out', () =>{
    cy.visit('/'); // Given

    LoginPage.fill_login('locked_out_user', 'secret_sauce'); // When

    LoginPage.BlockedUser.should('be.visible'); // Then
  });

  /*Scenerio: User error
    Given that i access the site
    When i input the username 'error_user'
    And the password 'secret_sauce'
    Then one of the products in inventory must be with the wrong name (A part of the font code of the website) 

    it('The site must have an error on the products list', ()=>{
      cy.visit('/'); // Given

      LoginPage.fill_login('error_user','secret_sauce'); // When

      

    });*/
});