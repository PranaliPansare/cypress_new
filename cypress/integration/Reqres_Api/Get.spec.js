// const { expect } = require("chai")


describe("verify the apl functionality", () => {
    it("validate the get request", () => {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2"
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eqls(200)
            
        })

    })



})
