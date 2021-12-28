describe('validate the coop API', () => {
    let token = ''
    let userId = ''

    beforeEach(() => {

        cy.request({
            method: "POST",
            url: "http://coop.apps.symfonycasts.com/token",
            body: {
                grant_type: 'client_credentials',
                client_id: 'minskolepqr',
                client_secret: "4a42ca54f2e454fd78c8c77af7bb9e8a"
            },
            form: true
        }).then((response) => {
            //cy.log(response)
            expect(response.status).to.eq(200)
            token = response.body.access_token

        })


    })

    it('verify the user and get the user id', () => {

        cy.request({
            method: "GET",
            url: "http://coop.apps.symfonycasts.com/api/me",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((resp) => {
            cy.log(resp)
            expect(resp.status).to.eql(200)
            userId = resp.body.id
        })


    })

    it('Unlock the burn ! api', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/barn-unlock	`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((resp) => {
            // cy.log(resp)
            expect(resp.body.message).to.eq("You just unlocked your barn! Watch out for strangers!")
        })
    })


    it('Call "toiletseat-down', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/toiletseat-down`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.message).to.eq(`You just put the toilet seat down. You\u0027re a wonderful roommate!`)
        })
    })


    it('Feed Your Chickens', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/chickens-feed`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            // cy.log(response)
            expect(response.body.message).to.eq("Your chickens are now full and happy")
        })

    })


    it('Collect Eggs from Your Chickens', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/eggs-collect`,
            Authorization: `Bearer ${token}`
        }).then(function (response) {
            // cy.log(response)
            expect(response.status).to.eql(200)
        })

    })

    it('Get the Number of Eggs Collected Today', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/eggs-count`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            // cy.log(response)
            expect(response.body.message).to.eq("You have collected a total of 0 eggs today")
        })
    })

})

























