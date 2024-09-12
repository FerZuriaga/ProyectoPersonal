class CartPage {
    verificarPrecios() {
        const precios = []


        cy.get(".cart_total_price").each((el) => {
            const texto = el.text().replace("Rs", "")
            const textoValor = parseFloat(texto)
            precios.push(textoValor)

        }).then(() => {
            cy.get("tbody tr:last-child td:last-child").then((precioTotal) => {
                let precioTotalNum = precioTotal.text().replace("Rs", "")
                precioTotalNum = parseFloat(precioTotalNum)

                let sumaTotalPrecios = precios.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
                sumaTotalPrecios = sumaTotalPrecios - precioTotalNum

                expect(precioTotalNum).to.equal(sumaTotalPrecios)
            })
        })
    }

    realizarPago(){
        cy.get(':nth-child(7) > .btn').click()

        cy.get("[name='name_on_card']").type("Galicia")
        cy.get("[name='card_number']").type("213023102312")
        cy.get("[name='cvc']").type("300")
        cy.get("[name='expiry_month']").type("07")
        cy.get("[data-qa='expiry-year']").type("2040")
        cy.get("[data-qa='pay-button']").click()
    }
}

export default new CartPage()