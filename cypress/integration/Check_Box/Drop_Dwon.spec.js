


describe("verify the drop_dwon functionality",()=>{
    it("verify the drop_dwon functionality",()=>{
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        // cy.get(".dropdown-menu-lists").click
        cy.get('select').first().select('JAVA').first().should('have.value', 'java')
        cy.get('select').first().select('C#').first().should('have.value', 'c#')
        cy.get('select').first().select('Python').first().should('have.value', 'python')
        

    })
})

