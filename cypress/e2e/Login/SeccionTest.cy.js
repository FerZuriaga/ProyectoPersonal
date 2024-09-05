/// <reference types="Cypress" />

describe("Seccion Tests", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })

    it("Ir a la seccion Test", () => {

        cy.url().should('include', 'automationexercise.com')
        cy.get('body').should('be.visible')

        cy.get("[href='/login']").click()
        cy.get("[data-qa='login-email']").type("pedrillo@gmail.com")
        cy.get("[data-qa='login-password']").should("be.visible").type("holapaola")
        cy.get("[data-qa='login-button']").should("be.visible").click()

        cy.contains('Test Cases').click() //si usas el contain y pones el titulo te lo considera bien, no hace falta el selector
        //cy.get('h2').should('contain.text', 'Test Cases')
        cy.get(".col-sm-offset-1 .text-center").should('contain.text', "Test Cases")

        cy.get('a[href="#collapse7"]').click() //aca 

        cy.get('a[href="#collapse7"]').should('contain.text', 'Test Case 7: Verify Test Cases Page').click()

    })





})