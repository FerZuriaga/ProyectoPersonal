/// <reference types="Cypress" />

let productosABuscar;

describe("Registro a medida que pago", () => {

    before(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")

        cy.fixture("productos").then(function (dato) {
            productosABuscar = dato.Productos;

        })



    })


    it("Pagar", () => {

        cy.Login("pedrillo@gmail.com", "holapaola")
        cy.log(productosABuscar)

        //productosABuscar.forEach(producto =>

        cy.get(".single-products").each((element) => {
            // cy.log(element.text())
            //let e  = element.text()
            cy.wrap(element).find(".productinfo p").then((nombreProducto) => {
                // cy.log(nombreProducto.text())

                const seEncontroProducto = productosABuscar.find((obj) => obj.nombre == nombreProducto.text())

                if (seEncontroProducto) {
                    //cy.log(nombreProducto.text())
                    
                    cy.wrap(element).find(".productinfo a").click()
                    cy.contains("Continue Shopping").click()
                }

                

                // if (productosABuscar.includes(nombreProducto.text())) {
                //     cy.log(nombreProducto.text())
                // }

            })


        })

    })


})

