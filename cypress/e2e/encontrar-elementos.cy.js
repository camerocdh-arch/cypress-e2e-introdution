describe('encontrar elementos con cypress', () => {
    beforeEach(() => {
        cy.visit('https://uitestingplayground.com/classattr')
    })
    it('Buscar un elemento por su id', () => {
        cy.get('#navbarSupportedContent')
    })
    it('Buscar un elemento por su clase', () => {
        cy.get('.class1')
        cy.get('.class2')
        cy.get('.class3')
    })
    it('Buscar un elemento por su etiqueta', () => {
    // este selector va a buscar todos los botones de la pagina
        cy.get('button')
    })
    it('Buscar un elemento por su atributo', () => {
        cy.get('button[type="button"]')
    })
    it('Buscar un elemento con "contains"', () => {
        cy.contains('Home')
        //Tambien podemos ignorar el case sensitive
        cy.contains('hoME', { matchCase: false })
    })
    it('Buscar un elemento y seleccionar el primero', () => {
        cy.get('button').first()
        cy.get('button').last()
    })
    it('Buscar un elemento por su "indice"', () => {
        cy.get('button').eq(1)
        cy.get('button').eq(2)  
        cy.get('button').eq(3)
    })
})
    
describe('practica curso cypress con la web Kiwoko', () => {

    beforeEach(() => {
        cy.visit('https://www.kiwoko.com/')

        cy.get('body').then(($body) => {
            if ($body.find('#onetrust-accept-btn-handler').length) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
    })

    it('Buscar un elemento', () => {
        cy.get('.logo-home').should('be.visible')
        cy.get('.fa.kwicon-store').first().should('be.visible')
        cy.get('.megamenu').first().should('be.visible')
        cy.get('.mega-link.mega-link-level0').first().should('be.visible')
    })

    it('Hacer click en un elemento', () => {
        cy.get('.mega-link.mega-link-level0').first().click()
    })

    it('Comprobar el buscador de Kiwoko', () => {

        cy.get('input[name="q"]')
            .first()
            .should('exist')
            .and('be.visible')
            .and('be.enabled')
            .type('perros')

        cy.get('input[name="q"]')
            .first()
            .should('have.value', 'perros')
    })
})

describe('Practica registro de usuario en Kiwoko', () => {

    beforeEach(() => {
        cy.visit('https://www.kiwoko.com/')
        cy.get('body').then(($body) => {
            if ($body.find('#onetrust-accept-btn-handler').length) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
    })

    it.only('Crear una cuenta y comprobar el formulario de registro', () => {

        // Aquí vamos a desarrollar todos los pasos:
        // 1. Localizar el botón Crear cuenta,// 2. Comprobar que está visible, // 3. Hacer clic.
        cy.get('.kwicon-user.fa').first().should('be.visible').click()
        
        // 4. Localizar el input de email,// 5. Escribir el email.
        cy.get('#login-form-email').should('be.visible').type('cameroch@hotmail.es')
        cy.contains('Email').should('be.visible')
       
        // 6. Localizar el input de contraseña, // 7. Escribir la contraseña.
        cy.get('#login-form-password').should('be.visible').type('123456')
       
        // 8. Localizar el botón Aceptar, // 9. Comprobar que se puede clicar, // 10. Hacer clic.
        cy.contains('Aceptar').should('be.visible').and('be.enabled').click()
        
        

    })

})
