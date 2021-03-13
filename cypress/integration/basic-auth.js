/// <reference types="cypress" />

describe('Logging In - Basic Auth', function () {
    // set these values
    const username = ''
    const password = ''

    context('cy.visit', function () {
        it('loads the page using basic auth', () => {
            cy.visit('https://swigwithus.com/', {
                auth: {
                    username,
                    password,
                },
            })

            cy.title().should('include','Boston, MA Wine, Beer, & Liquor')
        })
    })
})