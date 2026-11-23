describe('Pruebas de Login - Kiwoko', () => {

    beforeEach(() => {
        cy.visit('https://www.kiwoko.com/')

        cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
    })

    it('Verificar que se puede acceder al formulario de login', () => {

        cy.get('.kwicon-user.fa').first().click()
        cy.get('.nav-link.active.text-title').should('be.visible').click()


    })

})
