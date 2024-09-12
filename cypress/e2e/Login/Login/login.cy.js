/// <reference types="Cypress" />

import LoginPage from '../pageObjects/loginPage'


describe('Login Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
       loginPage.visit();
    });

    it('Debería loguear correctamente con credenciales válidas', () => {
        
        loginPage.fillEmail('pedrillo@gmail.com');
        loginPage.fillPassword('holapaola');
        loginPage.submit();
        
        
       
    });
});

//este reemplaza a logeando.cy.js
