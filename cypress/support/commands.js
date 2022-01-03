// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('GETApi', (method, url, body) => {

//     if (!body) {
//         cy.request({
//             method: method,
//             url: url,
//             headers: {
//                 Authorization: "Bearer 7e75e6429bfe639741052f2df7e09a422c3e68705f66dfc9f08631fed1c774f2"
//             }


//         })

//     } else {
//         cy.request({
//             method: method,
//             url: url,
//             headers: {
//                 Authorization: "Bearer 7e75e6429bfe639741052f2df7e09a422c3e68705f66dfc9f08631fed1c774f2"
//             },
//             body: body


//         })
//     }


// })
// Cypress.Commands.add('get', (method, url) => {

//     cy.request({
//         method: method,
//         url: url,
//         headers: {
//             Authorization: "Bearer 7e75e6429bfe639741052f2df7e09a422c3e68705f66dfc9f08631fed1c774f2"
//         }

//     })



// })
// Cypress.Commands.add('Table', (id) => {
//     let arr = []
//     let sum = 0
//     let Extras = 0
//     let totale = 0
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         return false
//     })
//     cy.get(`#innings_${id}`).find('.cb-ltst-wgt-hdr').first().find('.cb-scrd-itms').find('.text-bold').each((score) => {
//         arr.push(Number(score.text()))
//     }).then(() => {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == arr[arr.length - 1]) {
//                 totale = arr[i]
//             }
//             else if (arr[i] == arr[arr.length - 2]) {
//                 Extras = arr[i]
//             } else {
//                 sum = sum + arr[i]
//             }
//         }
//         // cy.log(sum)
//         // cy.log(totale)
//         // cy.log(Extras)
//         expect(sum + Extras).to.eql(totale)
//     })
// })
let add = 0
Cypress.Commands.add('id', (id,expected)=> {

cy.get(`${id}`).find('tr').each((row, index) => {
    // cy.log(row)
    if (index != 0)




        add = add + Number(row.find('td').last().text())

}).then(() => {
    expect(add).to.eql(expected)
})

 })