

describe("To get children of DOM elements, use the .children()", () => {
    it("To get children of DOM elements, use the .children()", () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').children().should('have.length', '5')

    })
    it('To get a DOM element at a specific index, use the .eq() command', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text', 'Milk')
    })

    it("To get the first DOM element within elements, use the .first() command", () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })

    it('To get the last DOM element within elements, use the .last()', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')

    })

    it("To get the next sibling DOM element within elements, use the .next()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#fruits').next().should('have.text','Apple')
    })

    it("To get all of the next sibling DOM elements within elements, use the .nextAll() command.",()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get("#fruits").nextAll()
    })
})