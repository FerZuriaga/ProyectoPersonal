/// <reference types="Cypress" />


describe("Seccion Login", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })


    it("Logear en la pagina", () => {
        cy.Login("pedrillo@gmail.com", "holapaola")


        for (let x = 0; x < 2; x++) {

            cy.contains("Products").click()
            cy.get(".product-image-wrapper").first().trigger('mouseover')
            cy.contains("Add to cart").click()
            cy.get('.modal-footer > .btn').click() //este es continuar con el shopping

            cy.get(".product-image-wrapper").eq(1).trigger('mouseover')
            cy.get("[data-product-id=2]").first().click()
        }

        cy.contains("View Cart").click()

        cy.get("[href='/product_details/1']").should("contain", "Blue Top")

        //cy.get("#cart_items").should("contain.text", "Blue Top") //este es mas corto y es lo mismo

        cy.get("[href='/product_details/2']").should("contain", "Men Tshirt")

        // cy.get(".cart_price p").first().should("have.text", "Rs. 500")
        // cy.get(".cart_quantity").should("contain.text", "1")
        // cy.get(".cart_total_price").should("contain", "500")


    


    })



})