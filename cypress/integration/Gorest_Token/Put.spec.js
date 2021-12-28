describe('validate Api functionality', () => {
    it("validate put request ", () => {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: 'Bearer7e75e6429bfe639741052f2df7e09a422c3e68705f66dfc9f08631fed1c774f2'
            },
            body: {



                "name": "pranali",
                "email": "pranalipansare@gmail.com",
                "gender": "female",
                "status": "inactive"
            }
        }).then(function(res){

            expect(res.status).to.eqls(200)

            expect(res.body.data.email).to.have.property('email')
            // expect(res.body.data).to.have.property('name')
            

        })

    })
})