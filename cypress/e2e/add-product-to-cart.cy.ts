describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.navigateToProductPage();
    cy.addToCart();
    cy.contains('Cart (1)').should('exist');
  });

  it('should not count duplicated products in cart', () => {
    cy.navigateToProductPage();
    cy.addToCart();
    cy.addToCart();
    cy.contains('Cart (1)').should('exist');
  });

  it('should be able to search for a product and add it to the cart', () => {
    cy.get('input[name=q]').type('moletom').parent('form').submit();
    cy.navigateToProductPage();
    cy.addToCart();
    cy.contains('Cart (1)').should('exist');
  });
});
