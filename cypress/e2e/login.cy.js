import LoginPage from '../support/pages/login.page' 
import HomePage from '../support/pages/home.page'


describe('Feature: Log in', () => {

  /*Scenerio: Successfull log in
    Given that i access the site
    When i input the username 'standard_user"
    And the password 'secret_sauce'
    Then i must be redirected to the home page */ 
  it('Must log in succesfully - User Standart', () => {
    //Given
    cy.visit('/');
   // When
    LoginPage.fill_login('standard_user', 'secret_sauce'); 
    // Then
    cy.url().should('include', '/inventory.html'); 
    HomePage.ProductsList.should('be.visible');
    cy.screenshot();
  });

  /*Scenerio: Locked out log in
    Given that i access the site
    When i input the username 'locked_out_user'
    And the password 'secret_sauce'
    Then i must see an alert abou the blocked access and stay at the login page
 */

  it('Must have the home page access blocked - User locked out', () =>{
    // Given
    cy.visit('/'); 
    // When
    LoginPage.fill_login('locked_out_user', 'secret_sauce'); 
    // Then
    LoginPage.WarningErrror.should('contain', 'Sorry, this user has been locked out.'); 
    cy.screenshot();
  });

  /*Scenerio: Log in with wrong credentials
    Given that i access the site
    When i input the username 'standard_user'
    And the password 'wrong_sauce"
    Then the website must block my acess and show an alert message*/

   it('Must have the home page access blocked - Invalid credentials', ()=>{
    // Given
    cy.visit('/');
    // When
    LoginPage.fill_login('standard_user', 'wrong_sauce');
    // Then
    LoginPage.WarningErrror.should('contain','Username and password do not match any user in this service');
    cy.screenshot();
   });
});