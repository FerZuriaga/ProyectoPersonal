/// <reference types="Cypress" />


describe("Registro a medida que pago", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })


    it("Pagar", () => {
        cy.Login("pedrillo@gmail.com", "holapaola")

        //const indicesProductos = [3,4,5]
         //const productos = cy.get(".product-image-wrapper")
         
         cy.get(".product-image-wrapper").each((el,index) =>{
            //cy.log(el, index)
            if( [3,4,5].includes(index) ){
                cy.wrap(el).find(".productinfo a").click()
                cy.contains("Continue Shopping").click()

            }


         })

         


        
         cy.contains("Cart").click()
         cy.get(".btn-default").should("have.text", "Proceed To Checkout")
        // cy.get(".col-sm-6 .btn-default").first().click()

        // cy.get(".address_firstname").should("contain.text", "Mr. Albafica Piscis")
        // cy.get(".address_address1").should("contain.text", "CasaDePiscis")
        // cy.get(".address_address2").should("contain.text", "tempodeAthenas2")
        // cy.get(".address_country_name").should("contain.text", "Canada")
        // cy.get(".cart_total_price").should("contain", "2500")
        // cy.get(".form-control").type("Llego todo")
        // cy.get("[href='/payment']").click()

        // cy.get("[name='name_on_card']").type("Galicia")
        // cy.get("[name='card_number']").type("213023102312")
        // cy.get("[name='cvc']").type("300")
        // cy.get("[name='expiry_month']").type("07")
        // cy.get("[data-qa='expiry-year']").type("2040")
        // cy.get("[data-qa='pay-button']").click()

        // cy.get('.col-sm-9 > p').should("have.text","Congratulations! Your order has been confirmed!")
        // cy.get('[data-qa="continue-button"]').click()

        //cy.get(':nth-child(5) > a')
    })

})