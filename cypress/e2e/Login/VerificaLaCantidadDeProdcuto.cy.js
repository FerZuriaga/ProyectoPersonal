/// <reference types="Cypress" />


describe("Verificar Productos", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })

    it("Verifiacion de la cantidad de productos" , () =>{

        cy.Login("pedrillo@gmail.com", "holapaola")
        cy.contains("View Product").click()
        cy.get(".product-information").should("be.visible")
        cy.get("input[name='quantity']").clear().type("5")
        cy.get("[type='button']").click()
        cy.contains("View Cart").click()
    })

})