


// describe("validate the xhr request", () => {
//     beforeEach(() => {
//         cy.visit("https://example.cypress.io/commands/network-requests")
//     })
//     it("verify the get comment button", () => {
//         cy.intercept({
//             method: "GET",
//             url: "https://jsonplaceholder.cypress.io/comments/1"
//         }).as('getCommet');
//         cy.contains('Get Comment').click()
//         cy.wait('@getCommet').then(({ response, request }) => {
//             cy.log(response)
//             cy.log(request)
//             expect(response.statusCode).to.eql(200)
//             expect(response.body).contains({ 'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' })

//         })
//     })
//     it("verify the post comment button", () => {
//         cy.intercept({
//             method: 'POST',
//             url: 'https://jsonplaceholder.cypress.io/comments',
//         },
//             {

//                 "name": "Using POST in cy.intercept()",
//                 "email": "hello@cypress.io",
//                 "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"


//             }).as('postCommet')
//         cy.contains('Post Comment').click()
//         cy.wait('@postCommet').then(({ response, request }) => {
//             cy.log(response)
//             expect(response.statusCode).to.eqls(200)
//             expect(response.body).to.eqls('You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE')
//         })
//     })
//     it("verify the put comment button", () => {

//         cy.intercept({
//             method: 'PUT',
//             url: 'https://jsonplaceholder.cypress.io/comments/1',
//         },
//             {


//                 "name": "Using PUT in cy.intercept()",
//                 "email": "hello@cypress.io",
//                 "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"


//             }).as('putCommet')
//         cy.contains('Update Comment').click()
//         cy.wait('@putCommet').then(({ response, request }) => {
//             cy.log(response)
//             expect(response.statusCode).to.eqls(200)
//             expect(response.body).to.eqls('You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE')

//         })

//     })
    




// })


