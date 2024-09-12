/// <reference types="Cypress" />


describe("Seccion Login", () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")


    })


    it("Logear en la pagina", () => {


        const email = Cypress.env("email");
        const password = Cypress.env("password")
        
        cy.Login(email, password)

        // cy.get("[href='/login']").click()
        // cy.get("[data-qa='login-email']").type("pedrillo@gmail.com")
        // cy.get("[data-qa='login-password']").should("be.visible").type("holapaola")
        // cy.get("[data-qa='login-button']").should("be.visible").click()

        cy.get("[href='/contact_us']").should("be.visible").click()
        cy.get("[data-qa='name']").type("Pedro")
        cy.get("[data-qa='email']").type("pedrillo@gmail.com")
        cy.get("[data-qa='subject']").type("Subiendo a Naruto")
        cy.get("[data-qa='message']").type("Probnando123")

        const ruta ='parasubir.jpg'

        cy.get("[name='upload_file']").attachFile(ruta)
        cy.wait(2000)
        cy.get("[data-qa='submit-button']").click()
        cy.get('.status').should("have.text", "Success! Your details have been submitted successfully.")
        cy.get('#form-section > .btn').click()


    })

})