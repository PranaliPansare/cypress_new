

describe("check the functionality of checkbox", () => {
    it("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html", () => {
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        // cy.get('[value="green"]').as('green')
        cy.get('[value="blue"]').as('blue')
        cy.get('[value="yellow"]').as('yellow')
        cy.get('@blue').check()
        cy.get('@blue').should('be.checked')
        cy.get('@yellow').should('not.be.checked')

    })
})