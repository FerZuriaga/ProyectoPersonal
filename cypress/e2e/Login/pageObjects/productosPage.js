class ProductosPage {
    buscarProducto(productosABuscar) {
        cy.get(".single-products").each((element) => {
            cy.wrap(element).find(".productinfo p").then((nombreProducto) => {
                const seEncontroProducto = productosABuscar.find((obj) => obj.nombre === nombreProducto.text())
                if (seEncontroProducto) {
                    cy.wrap(element).find(".productinfo a").click()
                    cy.contains("Continue Shopping").click()
                }
            })

        })

    }
    visit() {
        cy.contains("Products").click()
        cy.url().should('include', '/products')
    }


    seleccionarMarca(nombreMarca) {
        cy.get(".brands-name a").each((marca) => {
            if (marca.text().includes(nombreMarca)) {
                cy.wrap(marca).click();
            }
        });
    }

    verificarPaginaMarca(nombreMarca) {
        cy.url().should('include', `/brand_products/${nombreMarca}`);
        cy.get('.features_items').should('contain.text', nombreMarca);
    }


    irAlCarrito() {
        cy.contains("Cart").click()
    }
    

    suscribirseConEmail(email) {
        cy.get("#susbscribe_email").type(`${email} {enter}`);
    }
    

    verificarProductoEspecifico(nombreProducto) {
        cy.get(".single-products .productinfo p").each((elemento) => {
            if (elemento.text().includes(nombreProducto)) {
                cy.wrap(elemento).closest('.productinfo').contains('Add to cart').click({ force: true });
                cy.contains('Continue Shopping').click();
            }
        });
    }

   
    verificacionMarca() {

        cy.get('.brands_products').should('be.visible').and('contain.text', 'Brands')

    }

    clickMarca() {
        cy.get(".brands-name a").then((marcas) => {

            //cy.log(marcas.text())


            for (let i = 0; i <= marcas.length; i++) {      //al poner el length comparas numero con numero.. si no estarias haciendo numero con letras

                //if (!nombreDeMarca) continue

                const nombreDeMarca = marcas.eq(i).text() // el wrap lo usas en elementos Jquery NO EN STRING
                cy.log(typeof nombreDeMarca)

                if (nombreDeMarca.includes("Polo")) {
                    cy.wrap(marcas.eq(i)).click()
                    break
                }

            }
        })

    }

   

    



}

export default ProductosPage;