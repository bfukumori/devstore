/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>;
    navigateToProductPage(): Chainable<void>;
    addToCart(): Chainable<void>;
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/');
  cy.get('input[name=q]').type(query).parent('form').submit();
});

Cypress.Commands.add('navigateToProductPage', () => {
  cy.get('a[href^="/product"]').first().click();
  cy.location('pathname').should('include', '/product');
});

Cypress.Commands.add('addToCart', () => {
  cy.contains('Adicionar ao carrinho').click();
});
