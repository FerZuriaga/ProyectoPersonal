/// <reference types="Cypress" />


describe("Seccion Productos", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })


    it("Ir a la seccion productos", () => {


        cy.Login("pedrillo@gmail.com", "holapaola")

        // cy.get("[href='/login']").click()
        // cy.get("[data-qa='login-email']").type("pedrillo@gmail.com")
        // cy.get("[data-qa='login-password']").should("be.visible").type("holapaola")
        // cy.get("[data-qa='login-button']").should("be.visible").click()

        cy.contains("Products").click()
        cy.get("h2").should("contain.text", "All Products")
        cy.get(".features_items").should("be.visible")

        cy.get("[href='/product_details/1']").click()
        cy.get(".product-information h2").should("be.visible").should("contain.text", "Blue Top")
        cy.get(".product-information p").should("be.visible").eq(0)
        cy.get(".product-information span span").should("contain.text","Rs. 500")

    })


    it("Busqueda de Producto", () => {


        cy.Login("pedrillo@gmail.com", "holapaola")

        // cy.get("[href='/login']").click()
        // cy.get("[data-qa='login-email']").type("pedrillo@gmail.com")
        // cy.get("[data-qa='login-password']").should("be.visible").type("holapaola")
        // cy.get("[data-qa='login-button']").should("be.visible").click()

        cy.contains("Products").click()
        cy.get("h2").should("contain.text", "All Products")
        cy.get(".features_items").should("be.visible")
    
        cy.get("#search_product").should("be.visible").type("Winter Top")
        cy.get("#submit_search").click()
        cy.get('.title').should("be.visible")
        
        cy.get(".features_items .product-image-wrapper").each((producto) =>{
            //cy.log(producto)
            cy.wrap(producto).should("be.visible")

        })
        

    })

    it("Corroborar la subscripcion", () => {

        cy.Login("pedrillo@gmail.com", "holapaola")
        cy.contains("Products").click()
        cy.get("h2").should("contain.text", "All Products")
        cy.get(".features_items").should("be.visible")
        cy.scrollTo("bottom")
        //cy.get("h2").should("contain.text", "Subscription")
        cy.get(".single-widget h2").should("have.text", "Subscription")
        cy.get("#susbscribe_email").type("pedrillo@gmail.com {enter}")
        cy.get(".alert-success").should("have.text", "You have been successfully subscribed!")



        })




})