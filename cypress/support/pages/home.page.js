class HomePage{
    get ProductsList() {return cy.get('[data-test="inventory-list"]')}
  
}

export default new HomePage();