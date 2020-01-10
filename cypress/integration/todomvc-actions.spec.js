import { TodoPage } from '../pageobjects/page-todo';

describe('todo actions', () => {
    const todoPage = new TodoPage();

    beforeEach(() => {
        todoPage.navigate();

        todoPage.addToDo('Clean name');
    });

    it('should add a new todo to the list', () => {
        todoPage.validateToDoText(0, 'Clean name');
        cy.get('.toggle').should('not.be.checked');
    });

    it('should mark a todo as completed', () => {
        cy.get('.toggle').click();
        cy.get('label').should(
            'have.css',
            'text-decoration-line',
            'line-through',
        );
    });

    it('should clear completed todos', () => {
        cy.get('.toggle').click();

        cy.contains('Clear').click();

        cy.get('.todo-list').should('not.have.descendants', 'li');
    });
});
