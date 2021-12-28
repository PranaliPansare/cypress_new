describe("verify the apl functionality", () => {
    it("validate the post request", () => {

        cy.request({
            method: "post",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eqls(201)

        })

    })



})
