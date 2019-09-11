describe('TC.org Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/')
        cy.task('hello', { greeting: 'Hello', name: 'World' });
    });
});