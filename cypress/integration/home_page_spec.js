// removed "baseUrl" config from cypress.json

describe('TC.org Home Page', function() {
    it('successfully loads', function() {
        cy.visit('http://localhost:4000/')
        cy.task('hello', { greeting: 'Hello', name: 'World' });
    });
});