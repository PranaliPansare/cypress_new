
describe("verify the checkbox ",()=>{
    it("verify the checkbox",()=>{
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('input[type="checkbox"]').as('option-1')
        cy.get('input[type="checkbox"]').as('option-2')
        cy.get('@option-1').check()
        cy.get('@option-1').should('be.checked')
        cy.get('@option-2').uncheck()
        cy.get('@option-2').should('not.be.checked')


    })
})