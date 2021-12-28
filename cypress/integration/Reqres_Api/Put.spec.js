describe("verify the apl functionality", () => {
    it("validate the put request", () => {

        cy.request({
            method: "put",
            url: "https://reqres.in/api/users",
            body: {
                "name": "pranali",
                "job": "leader"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eqls(200)

        })

    })



})
