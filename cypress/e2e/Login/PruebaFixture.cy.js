/// <reference types="Cypress" />

import LoginPage from "../Login/pageObjects/loginPage";
import productosPage from "./pageObjects/productosPage";
import cartPage from "./pageObjects/cartPage";

// let productosABuscar;

// describe("Registro a medida que pago", () => {

//     before(() => {
//         cy.visit("https://www.automationexercise.com")
//         cy.title().should("contain", "Automation Exercise")

//         cy.fixture("productos").then(function (dato) {
//             productosABuscar = dato.Productos;

//         })

//     })

//     it("Pagar", () => {

//         const email = Cypress.env("email");

//         const password = Cypress.env("password")
//         cy.Login(email, password)

//         cy.log(productosABuscar)

//         //productosABuscar.forEach(producto =>

//         cy.get(".single-products").each((element) => {
//             // cy.log(element.text())
//             //let e  = element.text()
//             cy.wrap(element).find(".productinfo p").then((nombreProducto) => {
//                 // cy.log(nombreProducto.text())

//                 const seEncontroProducto = productosABuscar.find((obj) => obj.nombre == nombreProducto.text())

//                 if (seEncontroProducto) {
//                     //cy.log(nombreProducto.text())

//                     cy.wrap(element).find(".productinfo a").click()
//                     cy.contains("Continue Shopping").click()
//                 }



//                 // if (productosABuscar.includes(nombreProducto.text())) {
//                 //     cy.log(nombreProducto.text())
//                 // }

//             })


//         })

//         cy.contains("Cart").click()
//         cy.get(".btn-default").should("have.text", "Proceed To Checkout")
//         cy.get(".col-sm-6 .btn-default").first().click()

//         const precios = []

//         cy.get(".cart_total_price").each((el) => {
//             const texto = el.text().replace("Rs.", "");
//             const textoValor = parseFloat(texto)
//             precios.push(textoValor)
//         }).then(() => {

//             cy.log(precios)
//             cy.get("tbody tr:last-child td:last-child").then((precioTotal) => {
//                 //cy.log(precioTotal.text())

//                 precioTotal = precioTotal.text().replace("Rs.", "")
//                 precioTotal = parseFloat(precioTotal)


//                 let sumaTotalPrecios = 0

//                 sumaTotalPrecios = precios.reduce((acumulador, valorActual) => acumulador + valorActual, 0)

//                 // se quita la suma del precio total que se agrego al arreglo precio, 
//                 // ejemplo mi producto a = 200 ,  b = 300, c = 100 total 500 .. entonces aca se sumaron todos los valores desde el 200 al 500
//                 //entonces agarro y a ese precio total lo resto..
//                 sumaTotalPrecios = sumaTotalPrecios - precioTotal



//                 //lo que esta comentado es otra manera de hacerlo
//                 // let sumaTotalPrecios = 0                                             
//                 // precios.forEach((itemPrecio) => {
//                 //     sumaTotalPrecios += itemPrecio
//                 // })

//                 // sumaTotalPrecios = sumaTotalPrecios - precioTotal         

//                 expect(precioTotal).to.equal(sumaTotalPrecios)

//             })
//         })

//         cy.get(':nth-child(7) > .btn').click()

//         cy.get("[name='name_on_card']").type("Galicia")
//         cy.get("[name='card_number']").type("213023102312")
//         cy.get("[name='cvc']").type("300")
//         cy.get("[name='expiry_month']").type("07")
//         cy.get("[data-qa='expiry-year']").type("2040")
//         cy.get("[data-qa='pay-button']").click()


//     })


// })

let productosABuscar

describe("Registro a medida que pago", () => {

    const loginPage = new LoginPage()
    before(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")

        cy.fixture("productos").then(function (dato) {
            productosABuscar = dato.productosABuscar
        })
    })

    it("Pagar", () => {
        const email = Cypress.env("email")
        const password = Cypress.env ("password")

        loginPage.login(email,password)

        productosPage.buscarProducto(productosABuscar)

        cy.contains("Cart").click()
        cartPage.verificarPrecios()

        cartPage.realizarPago()
    })

})