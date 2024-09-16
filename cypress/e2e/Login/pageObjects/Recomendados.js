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

    verificarProductoNoExistente(nombreProducto) {
        cy.get(".recommended_items").should("be.visible")
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

}

export default Recomendados