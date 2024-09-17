import ProductosPage from "./pageObjects/productosPage";
import Recomendados from "./pageObjects/Recomendados";
import cartPage from "./pageObjects/cartPage";

describe("Prueba de productos y marcas", () => {

    const productos = new ProductosPage
    const recommend = new Recomendados
    const cart = new cartPage

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com");
        cy.title().should("contain", "Automation Exercise");
    });

    it( "Agregar productos al carrito y verificar en el carrito", () => {
         productos.verificarProductoEspecifico("Fancy Green Top")
         productos.verificarProductoEspecifico("Cotton Mull Embroidered Dress")
        productos.irAlCarrito()
        cart.verificarProductoEnCarrito("Fancy Green Top")
        cart.verificarProductoEnCarrito("Cotton Mull Embroidered Dress")


    })

    it("Navegar entre marcas y verificar producto", () => {
        productos.seleccionarMarca("Madame")
        productos.verificacionMarca()
    })

    it("Suscribirse con email valido e invalido", () => {
        productos.irAlCarrito();
        productos.suscribirseConEmail('emailvalido@gmail.com');
        cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!')

        // productos.suscribirseConEmail('no esta');
        // cy.get('.alert-danger').should('have.text', 'Email is not valid!')
    })

    it.only("Eliminar un producto del carrito", () => {
        productos.verificarProductoEspecifico("Blue Top")
        productos.irAlCarrito()
        cart.eliminarProductoDelCarrito()
        cart.verificarCarritoVacio()
    })



})