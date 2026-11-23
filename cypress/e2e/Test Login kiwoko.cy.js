
describe('Pruebas de Login - Kiwoko', () => {

    beforeEach(() => {
        cy.visit('https://www.kiwoko.com/')

        cy.get('#onetrust-accept-btn-handler')
            .should('be.visible')
            .click()

        cy.get('.kwicon-user.fa').first().click()
    })

    it('Verificar el acceso al formulario de login', () => {

        cy.get('input[type="email"]')
            .should('be.visible')

        cy.get('input[type="password"]')
            .should('be.visible')
    })

    it('Verificar que el login impide el acceso con campos vacíos', () => {

        cy.get('.isk-button').first()
            .should('be.visible')
            .click()

        cy.get('#login-form-email')
            .should('have.value', '')

        cy.get('#login-form-password')
            .should('have.value', '')

        cy.get('#login-form-email').should('be.visible')
    })

    it('Verificar el inicio de sesión con credenciales incorrectas', () => {

        cy.get('#login-form-email')
            .type('usuario.incorrecto@example.com')

        cy.get('#login-form-password')
            .type('123456')

        cy.get('.isk-button').first()
            .should('be.visible')
            .click()

        cy.get('#login-form-email')
            .should('be.visible')
    })

    it('Verificar login con contraseña vacía', () => {

        cy.get('#login-form-email')
            .type('usuario@example.com')

        cy.get('.isk-button').first()
            .should('be.visible')
            .click()

        cy.get('#login-form-password')
            .should('have.value', '')

        cy.get('#login-form-email')
            .should('be.visible')
    })

    it('Verificar login con email vacío', () => {

        cy.get('#login-form-password')
            .type('123456')

        cy.get('.isk-button').first()
            .should('be.visible')
            .click()

        cy.get('#login-form-email')
            .should('have.value', '')

        cy.get('#login-form-password')
            .should('be.visible')
    })

})
