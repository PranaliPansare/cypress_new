// const { expect } = require("chai");
// const cypress = require("cypress");
// const { describe } = require("mocha");

// const { expect } = require("chai")

// const { expect } = require("chai")

// const { expect } = require("chai")

// const { it } = require("mocha")

// const { describe } = require("mocha");

describe("verify outh2.0", () => {
    let token = " "
    it("verify outh2.0 ", () => {

        cy.request({
            method: "POST",
            url: "http://coop.apps.symfonycasts.com/token",
            body: {
                grant_type: 'client_credentials',
                client_id: "minskolepqr",
                client_secret: "4a42ca54f2e454fd78c8c77af7bb9e8a",

            },
            form: true

        }).then((res) => {

            expect(res.status).to.eql(200)
            // cy.log(res)
            token = res.body.access_token

        }).then(() => {
            cy.request({
                method: "GET",
                url: "http://coop.apps.symfonycasts.com/api/me",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {
                // cy.log(resp)
                expect(resp.status).to.eql(200)
                return resp.body.id
                //user_id = ""
            }).then((id)=>{
                cy.request({
                    method: "POST",
                    url: `http://coop.apps.symfonycasts.com/api/${id}/barn-unlock`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                   
        
                }).then((responce)=>{
                    cy.log(responce)
                    expect(responce.body.message).to.eql("You just unlocked your barn! Watch out for strangers!")


                })
            })
        })
    })
})
