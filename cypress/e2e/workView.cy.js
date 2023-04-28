// https://docs.cypress.io/api/introduction/api.html

describe('h2 renderice', () => {
  it('visits the work view', () => {
    cy.visit('/work');
    cy.contains('h2', '/work.');
  });
});
