describe('verify the drop down functionality', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })
it('verify the  drop down functionality', () => {
        cy.get('#dropdowm-menu-1').select('java').should('have.value', "java")
    })
    it('selecting the values from multiple drop down list', () => {
        let selectedV = ["sql", "junit", "javascript"]
        cy.get('.section-title').first().children().each((el, index) => {
            cy.wrap(el).select(selectedV[index]).should('have.value', selectedV[index])
        })
    })
    it('verify whether the element is enabled or disabled', () => {
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.visible')
    })
    it('verify  the current url ', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.url().should('contains', 'Checkboxes')

    })

    it('verify  the title', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('include', 'WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')

    })


})