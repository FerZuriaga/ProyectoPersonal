/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe ("Seccion SignUp", () =>{

    beforeEach(()=>{
        cy.visit("https://www.automationexercise.com")
        cy.title().should("contain", "Automation Exercise")

       
    })

    it("Iniciando en login", () =>{

        
        cy.Signup("Albafica", "albafica@gmail.com")
        // cy.get("[href='/login']").click()

        // cy.get("[data-qa='signup-name']").type("Albafica").tab().type("albafica@gmail.com")
        // cy.get("[data-qa='signup-button']").click({force:true})

    })

    it.only("Llenar datos de Sign Up", () =>{

        cy.Signup("Pedro", "pedrillo@gmail.com")
        //cy.get('#id_gender1').check()
        cy.get(".radio-inline [type='radio']").eq(0).check()
        cy.get("#password").should("be.visible").type("holapaola")
        cy.get("#days").should("be.visible").select("16")
        cy.get("#months").should("be.visible").select("August")
        cy.get("#years").should("be.visible").select("1996")
        //cy.get(".checkbox").eq(1).contains("Receive special offers from our partners!").click() //en este caso no puedo usar un check por que es un label (en donde esta el texto)
        cy.get("#optin").check() //este id es un input.. entonces los input yo puedo usar un check
        cy.get("#first_name").should("be.visible").type("Albafica")
        cy.get("#last_name").should("be.visible").type("Piscis")
        cy.get("#company").type("CasaDePiscis")
        cy.get("#address1").type("tempodeAthenas")
        cy.get("#address2").type("tempodeAthenas2")
        cy.get("#country").should("be.visible").select("Canada")
        cy.get("#state").should("be.visible").type("Terranova")
        cy.get("#city").should("be.visible").type("Toronto")
        cy.get("#zipcode").type("2051")
        cy.get("#mobile_number").type("1244551")
        cy.get("[data-qa='create-account']").click()

    })

    

})