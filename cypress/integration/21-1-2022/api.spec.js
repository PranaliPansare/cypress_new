describe("validate all apl", () => {
    it("Verify The Get Request", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eqls(200)
            // expect(response.body.data.id).to.eqls(7)
            // expect(response.duration).to.eqls(558)
        })
    })
    it("Verify The POST Request", () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users"
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eqls(201)
        })
    })
   it("Verify The PUT Request", () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users"
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eqls(200)
        })
    })

    it("Verify The DELETE Request", () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eqls(204)
        })
    })



})
