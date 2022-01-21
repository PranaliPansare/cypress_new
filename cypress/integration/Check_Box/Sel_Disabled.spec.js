describe("verify the radio button is disable or not", () => {
    it('verify the radio button is disable or not', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('[name="vegetable"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('be.disabled')
        cy.get('input[value="cabbage"]').should('not.be.disabled')
        

    })
})
