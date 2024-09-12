class ProductosPage {
    buscarProducto(productosABuscar) {
        cy.get(".single-products").each((element) => {
            cy.wrap(element).find(".productinfo p").then((nombreProducto) =>{
                const seEncontroProducto = productosABuscar.find((obj) => obj.nombre === nombreProducto.text())
                if(seEncontroProducto) {
                    cy.wrap(element).find(".productinfo a").click()
                    cy.contains("Continue Shopping").click()
                }
            })

        })
        
    }
}

export default new ProductosPage();