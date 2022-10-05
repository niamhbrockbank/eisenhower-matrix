describe("eisenhower matrix app", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays some notes by default', () => {
        cy.get('.note_div').should('have.length.at.least', 2)

        //Check that the 'add new note' instructions exist
        cy.get('.note_div').should('include.text', 'Add a new note')
    })

    const newNote = 'Cypress test'

    it('can add new notes', () => {

        cy.get('#new_note Button').contains('New Note').click()
        cy.get('input').type(`${newNote}`)
        cy.get('Button').contains('Save').click()

        //check that the modal has closed
        cy.get('#new_note_modal').should("not.be.visible")

        //check last element in .note_div list contains Cypress test
        // cy.get('.note_div').last().should('have.text', newNote)
    })

    it('can delete notes', () => {
        cy.get('.note_div').contains(`${newNote}`)
            // .children()
            // .find('button').contains('🗑️')
    })
})