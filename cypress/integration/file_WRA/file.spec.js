/// <reference types="cypress" />

describe("verify the readWrite operation",()=>{
    it("verify the write function",()=>{
        cy.writeFile('abc.txt', "I am learning javascript \n")
        cy.writeFile('abc.txt','javascript',{ flag: 'a+' })
    })

    it("verify the write function",()=>{
        cy.readFile('abc.txt').should('exist').and('contain',"Welcome")
        cy.readFile('abc.txt').should('contain',"Welcome")
})
})

