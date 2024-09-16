/// <reference types="Cypress" />


// describe("Pruebas de marcas en la página de productos", () => {

//     beforeEach(() => {
//         cy.visit("https://www.automationexercise.com")
//         cy.title().should("contain", "Automation Exercise")


//     })

//     it("Verificar marcas y navegar entre páginas de marcas", () => {

//         cy.contains("Products").click()
//         cy.url().should('include', '/products')
//         cy.get('.brands_products').should('be.visible').and('contain.text', 'Brands')
//     })

//     it.only('Hacer clic en cualquier marca y verificar que se muestren los productos', () => {



//         cy.get(".brands-name a").then((marcas) => {

//             cy.log(marcas.text()) 


//              for (let i = 0; i <= marcas.length; i++) {      //al poner el length comparas numero con numero.. si no estarias haciendo numero con letras

//                 //if (!nombreDeMarca) continue

//                 const nombreDeMarca = marcas.eq(i).text() // el wrap lo usas en elementos Jquery NO EN STRING
//                 cy.log(typeof nombreDeMarca)

//                   if(nombreDeMarca.includes("Polo")){
//                      cy.wrap(marcas.eq(1)).click()
//                  }

                

//                 cy.log(marcas.text()) 

//             } 

          


//         })

//         //cy.get("[href='/brand_products/Polo']").click()



//     })

// })

import ProductosPage from "../pageObjects/productosPage";

describe("Prueba de marcas en la pagina productos", () => {
    const productpage = new ProductosPage()

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com");
        cy.title().should("contain", "Automation Exercise")

    })

    it("Verificar marcas y navegar en la pagina de marca", () => {
        productpage.visit()
        productpage.verificacionMarca()

    })

    it("Hacer click en cualquier marca y verificar que se muestren los productos",  () => {
        productpage.visit()
        productpage.clickMarca("Polo")

        cy.url().should('include', 'brand_products/Polo');
        cy.get('.productinfo').should('be.visible')

    })

    })
