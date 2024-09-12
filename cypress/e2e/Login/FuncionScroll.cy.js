/// <reference types="Cypress" />


describe("Seccion Login", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })

    it("Verificar que la página de inicio sea visible correctamente y realizar acciones de scroll", () => {

        cy.scrollTo('bottom')
        cy.wait(2000)

        cy.get("h2").contains("Subscription").should("be.visible")
        cy.wait(2000)

        cy.scrollTo('top')
        
        //cy.get("#scrollUp").click()

        cy.get('h2').contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        
    })

})


