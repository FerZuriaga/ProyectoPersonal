// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('cypress-plugin-tab')
Cypress.Commands.add("Signup", (nombre, email) => {

    cy.get("[href='/login']").click()
    cy.get("[data-qa='signup-name']").type(nombre).tab().type(email)
    cy.get("[data-qa='signup-button']").click({ force: true })



})


Cypress.Commands.add("Login", (email,password) => {

    // const email = Cypress.env("email");
    // const password = Cypress.env("password")

    cy.get("[href='/login']").click()
        cy.get("[data-qa='login-email']").type(email)
        cy.get("[data-qa='login-password']").should("be.visible").type(password)
        cy.get("[data-qa='login-button']").should("be.visible").click()



})

