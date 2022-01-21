

/// <reference types="cypress" />

describe("Hook concepat", () => {

    before(() => {
        cy.log("Miracles happen to those who believe in them")
    })
    beforeEach(() => {
        cy.log("Positive anything is better than negative nothing.")
    })

    after(() => {
        cy.log("One small positive thought can change your whole day.")
    })
    afterEach(() => {
        cy.log("Believe you can and you’re halfway there.")
    })


    it('Testcase case one ', () => {
        cy.log('Testcase one running')
    })

    it('Testcase case two', () => {
        cy.log('Testcase two running')

    })

})