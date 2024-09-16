class TestPage {

    visit() {
        cy.contains('Test Cases').click()
    }

    verificarTestPage() {
        cy.get(".col-sm-offset-1 .text-center").should('contain.text', "Test Cases")
    }

    abrirTest7() {
        cy.get('a[href="#collapse7"]').click() 
        cy.get('a[href="#collapse7"]').should('contain.text', 'Test Case 7: Verify Test Cases Page').click()
    }
}

export default TestPage