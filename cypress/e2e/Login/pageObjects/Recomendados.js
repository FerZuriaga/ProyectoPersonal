class Recomendados {
    verificarItemRecomendadoVisible() {
        cy.get(".recommended_items").should("be.visible")
    }

    

    agregarCarritoElItemRecomm() {
        cy.get(".recommended_items .productinfo").each((el, index) => {
            if (index === 0 || index === 1 || index === 2) {
                cy.wrap(el).contains("Add to cart").click({ force: true })
                cy.contains("Continue Shopping").click()

            }

            if (index === 2) {
                cy.contains("View Cart").click({ force: true })
            }

        })
    }

    agregarProductoRecomendadoEspecifico(nombreProducto) {
        cy.get(".recommended_items .productinfo p").each((elemento) => {
            if (elemento.text().includes(nombreProducto)) {
                cy.wrap(elemento).closest('.productinfo').contains('Add to cart').click({ force: true });
                cy.contains('Continue Shopping').click();
            }
        });
    }

    verificarProductoNoExistente(nombreProducto) {
        
        cy.get(".recommended_items .productinfo p").each((elemento) => {
            cy.wrap(elemento).should("not.have.text", nombreProducto)
        })
    }

    agregarProductoEspecifico(nombreProducto) {
        cy.get(".single-products .productinfo p").each((elemento) => {
            if (elemento.text().includes(nombreProducto)) {
                cy.wrap(elemento).closest('.productinfo').contains('Add to cart').click({ force: true });
                cy.contains('Continue Shopping').click();
            }
        });
    }

    suscribirseConEmail(email) {
        cy.get("#susbscribe_email").type(`${email} {enter}`);
    }

    buscarProducto(terminoBusqueda) {
        cy.get('#search_product').type(`${terminoBusqueda}{enter}`);
    }

}

export default Recomendados