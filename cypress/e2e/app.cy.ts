describe("eisenhower matrix app", () => {
    beforeEach(() => {
        cy.login();
        cy.visit('http://localhost:3000/')
        // cy.get('#sign_in').click() 
    })

    afterEach(() => {
        cy.logout()
    })

    it('displays new note button', () => {
        cy.get('#new_note Button').contains('New Note')
    })

    it('displays some notes by default', () => {
        cy.get('.note_div').should('have.length.at.least', 2)

        //Check that the 'add new note' instructions exist
        cy.get('.note_div').should('include.text', 'Add')
    })

    const newNote = 'Cypress test'

    it('can add new notes', () => {

        cy.get('#new_note Button').contains('New Note').click()
        cy.get('input').type(`${newNote}`)
        cy.get('Button').contains('Save').click()

        //check that the modal has closed
        cy.get('#new_note_modal').should("not.be.visible")

        //check post request is sent
        cy.server()
        cy.route('POST', '/notes').as(`${newNote}`)

        //check recieved repsonse
        //check last element in .note_div list contains Cypress test
        // cy.get('#notes_list li').should('have.text', newNote)
    })

    // it('can delete notes', () => {
    //     cy.get('#notes_list li').last()
    //         .children()
    //         .find('button').contains('🗑️')
    // })
})