




describe("validate the xhr request ", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests")
    })
    it("verify the get comment button", () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment');
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(({ response, request }) => {
            cy.log(response)
            // cy.log(request)
            expect(response.body.name).to.eqls("id labore ex et quam laborum")
            expect(request.headers.host).to.eqls("jsonplaceholder.cypress.io")
        })
    })
    it('verify the get comment button', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }, {
            body: {
                "postId": 12,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "Do good and good will come to you"
            }

        }).as('getComment');
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(({ request, response }) => {
            cy.log(response)
            cy.log(request)

            expect(response.body.body).to.eqls("Do good and good will come to you")
        })


    })
    it('verify post request ()', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",

        }, {

            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "Positivity always wins",
                "id": 501
            }

        }).as('postComment')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(({ request, response }) => {

            cy.log(request)
            cy.log(response)
            expect(request.headers.connection).to.eqls("keep-alive")
            expect(response.body.id).to.eqls(501)

        })




    })
    describe('intercept concept',()=>{
        it.only('verify the PUT xhr request with intercept',()=>{
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.intercept({
                method:"PUT",
                url:"https://jsonplaceholder.cypress.io/comments/1"
            },{
                body:
                    {
                        "name": "Using PUT in cy.intercept()",
                        "email": "hello@cypress.io",
                        "body": "PUT CHANGE ge the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                        "id": 1
                      }
        
                    
            }).as('updateComment')
    
            cy.contains('Update Comment').click()
            cy.wait('@updateComment').then(({response,request})=>{
                console.log(response)
                console.log(request)
                expect(response.body.id).to.eql(1)
                expect(request.headers.host).to.eql("jsonplaceholder.cypress.io")
                
            })
        
            
    
        })
    

    })
    
        
    })









    



    









