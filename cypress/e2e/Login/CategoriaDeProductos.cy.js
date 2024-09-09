/// <reference types="Cypress" />


describe("Categoria de Prodcutos", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })

    it("Categoria Mujer", () =>{

        cy.get(".left-sidebar h2").should("be.visible").and("contain.text", "Category")

        cy.contains("Women").click()
        cy.get("[href='/category_products/1']").click()

        cy.contains("Women - Dress Products").should("be.visible")
    })

    it("Categoria Hombre", () =>{

        cy.get(".left-sidebar .panel-default").contains("Men").click()
        cy.contains("Tshirts ").click()
        cy.get("h2.text-center").should("contain", "Men - Tshirts Products")
    })



})
