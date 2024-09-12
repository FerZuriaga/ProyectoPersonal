/// <reference types="Cypress" />


describe("Productos Recomendados", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })

    it("Verificar que los 'ARTÍCULOS RECOMENDADOS' estén visibles y agregar al carrito", () => {

        cy.get(".recommended_items").should("be.visible")

        cy.get(".recommended_items .productinfo").each((el,index) =>{
            if(index === 0 || index === 1 || index === 2){
                cy.wrap(el).contains("Add to cart").click({force:true})
                cy.contains("Continue Shopping").click()
            
            }

            if(index === 2){
                cy.contains("View Cart").click({force:true})
            }

        })

       

    })

})