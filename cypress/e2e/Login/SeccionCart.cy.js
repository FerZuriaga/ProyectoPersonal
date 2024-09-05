/// <reference types="Cypress" />


describe("Seccion Productos", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")

    })


    it("Verificar suscripción en la página del carrito", () => {

        cy.Login("pedrillo@gmail.com", "holapaola")
        cy.contains("Cart").click()

        cy.scrollTo("bottom")
        cy.get(".single-widget h2").should("have.text", "Subscription")
        cy.get("#susbscribe_email").type("pedrillo@gmail.com {enter}")
        cy.get(".alert-success").should("have.text", "You have been successfully subscribed!")


    })

})