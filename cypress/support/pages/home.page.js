class HomePage{
    get ProductsList() {return cy.get('[data-test="inventory-list"]')}
    get CartButton() {return cy.get('[data-test="shopping-cart-link"]')}
    get SortButton() {return cy.get('[data-test="product-sort-container"]')}

    getItemPrice(number){
        return cy.get(`:nth-child(${number}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`);
    }

    getProductItem(number){
        return cy.get(`:nth-child(${number}) > [data-test="inventory-item-description"]`);
    }
    
    getAddToCartButtonItem(item_name){
        return cy.get(`[data-test="add-to-cart-sauce-labs-${item_name}"]`);
    }

}

export default new HomePage();