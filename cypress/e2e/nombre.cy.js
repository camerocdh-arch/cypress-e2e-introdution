describe('Test de nombre', function (){
//Hooks
before(function (){
    cy.log('ejecutando antes de todos los its   ')
    })
    after(function () {
        cy.log('ejecutando despues de todos los its')
    })
    beforeEach(function () {
        cy.log('ejecutando antes de cada it')
    })
    afterEach(function () {
        cy.log('ejecutando despues de cada it')
    })
//test
    it('Test case #1', function () {
        cy.log('Hola Mundo aprendiendo cypress')
    })

    it('Test case #2', function () {
        cy.log('Hola Mundo aprendiendo cypress ')
    })

    it('Test case #3', function () {
        cy.log('Hola Mundo aprendiendo cypress')
    })

})
