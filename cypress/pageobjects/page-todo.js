/// <reference types="cypress" />

export class TodoPage {
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addToDo(text) {
        cy.get('.new-todo').type(text + '{enter}')
    }

    validateToDoText(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }
}