


describe("validate the order paypal api", () => {
    it("verify the order APi", () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QVRNYlVqLUFfNi11SkpOSi1IVnpQcFlwSVdmSFNXcmdfVDdXQkd6dlJvNXl6SWJ5dU5aUjdYMzRvdU1DSzFqaUYxQXU4MzlBcXlSeTQ2clQ6RUp1aVgtTDVSU1E2R1pSS2M3b2VVWkZ2TmRiWEZEMkkxRTNjS21ZSW5KNTYxRTlZWnFmRFk2UzFJNDRyYXl0em9yQXF3SnRFaHBXaWlsMEw=",
            },
            body: {
                grant_type: 'client_credentials'
            },
            form: true
        }).then(function (resp) {

            expect(resp.status).to.eql(200)
            expect(resp.body.app_id).to.eql("APP-80W284485P519543T")
            return resp.body.access_token
        }).then(function (accesstoken) {
            cy.request({
                method: "POST",
                url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",
                headers: {
                    "Authorization": `Bearer ${accesstoken}`,
                    "content-type": "application/json",
                },
                body:
                {
                    "intent": "CAPTURE",
                    "purchase_units": [
                        {
                            "amount": {
                                "currency_code": "USD",
                                "value": "100.00"
                            }
                        }
                    ]
                }

            }).then(function(respons)  {
                cy.log(respons)
                expect(respons.status).to.eql(201)
                // expect(respons.body.link).to.have.lengthOf(4)
            })
        })
    })

})
