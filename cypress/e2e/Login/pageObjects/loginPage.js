class LoginPage {
    visit() {
        cy.visit("https://www.automationexercise.com")
        cy.contains(" Signup / Login").click();
    }



    fillEmail(email) {
        cy.get("[data-qa='login-email']").type(email);


    }

    fillPassword(password) {
        cy.get("[data-qa='login-password']").type(password);
    }

    submit() {
        cy.get("[data-qa='login-button']").click();
    }

    login(email, password) {
        //this.visit(); // Navegar a la página de login
        cy.get("[href='/login']").click()
        this.fillEmail(email); // Ingresar el email
        this.fillPassword(password); // Ingresar la contraseña
        this.submit(); // Enviar el formulario

    }
}

export default LoginPage;