describe('My First Test', function() {
    it('finds the content "type"', function() {
        cy.visit('https://example.cypress.io');

        cy.contains('type');
    });
});

describe('My Second Test', function() {
    it('Gets, types and asserts', function() {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    });
});

describe('My Third Test', function() {
    it('clicking "type" shows the right headings', function() {
        cy.visit('https://example.cypress.io');

        cy.pause();

        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    });
});
