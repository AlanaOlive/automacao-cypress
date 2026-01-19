class CartPage{
    get CheckoutButton() {return cy.get('[data-test="checkout"]')}
    get ContinueShoppingButton() {return cy.get('[data-test="continue-shopping"]')}
    get ItemQty() {return cy.get('[data-test="item-quantity"]')}
    get ItemName() {return cy.get('[data-test="inventory-item-name"]')}
    get ItemPrice() {return cy.get('[data-test="inventory-item-price"]')}
   
    removeItem(item_name){
        return cy.get(`[data-test="remove-sauce-labs-${item_name}]`);
    }

}

export default new CartPage();