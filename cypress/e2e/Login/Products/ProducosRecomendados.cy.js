/// <reference types="Cypress" />

import Recomendados from '../pageObjects/Recomendados'

describe("Productos Recomendados", () => {

    const recomendados = new Recomendados

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })

    it("Verificar que los 'ARTÍCULOS RECOMENDADOS' estén visibles y agregar al carrito", () => {


        recomendados.verificarItemRecomendadoVisible()

        recomendados.agregarCarritoElItemRecomm()

        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('be.visible')



            // cy.get(".recommended_items").should("be.visible")

            // cy.get(".recommended_items .productinfo").each((el,index) =>{
            //     if(index === 0 || index === 1 || index === 2){
            //         cy.wrap(el).contains("Add to cart").click({force:true})
            //         cy.contains("Continue Shopping").click()

            //     }

            //     if(index === 2){
            //         cy.contains("View Cart").click({force:true})
            //     }

            // })



        // })

        // let indices = [0, 1, 2]              esta es otra manera de hacer lo mismo de arriba

        // cy.get(".recommended_items .productinfo").each((el, index) => {


        //     if (indices.includes(index)) {
        //         cy.wrap(el).contains("Add to cart").click({ force: true });
        //         cy.contains("Continue Shopping").click();
        //     }
        //     // Si es el último artículo en los índices dados, hacer clic en "View Cart"
        //     if (index === Math.max(...indices)) {
        //         cy.contains("View Cart").click({ force: true });
        //     }
        // });


    })

    it("Prueba negativa: Verificar que un producto inexistente no está en productos recomendados", () => {
        const productoNoExistente = "Producto Falso";
        recomendados.verificarProductoNoExistente(productoNoExistente);
    });

    it("Prueba positiva: Verificar que un producto específico se puede agregar al carrito", () => {
        const productoEspecifico = "Winter Top"
        recomendados.agregarProductoEspecifico(productoEspecifico)


    })

    })



