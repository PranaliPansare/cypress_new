// describe("ppp", () => {

//     it("pppp", () => {
//         function calVal(id, expectedVal) {
//             let sum = 0
//             cy.get(`#${id}`).find('tbody').children().each(function (el, index) {
//                 if (index != 0) {
//                     sum = sum + Number(el.children().last().text())// '45' ==> 45
//                 }

//             }).then(() => {
//                 expect(sum).to.eq(expectedVal)
//              })
//          }
//      })

//     beforeEach(() => {
//         cy.visit("https://webdriveruniversity.com/")
//     })

//     it(" validate the table ", () => {
//         calVal("t01", 159)

//     })
//     it(" validate the table ", () => {
//         calVal("t02", 163)

//     })

// })

describe('validate the tables', () => {

    function calTable(id, expectedVal) {
        let sum = 0
        cy.get(`#${id}`).find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())// '45' ==> 45
            }

        }).then(() => {
            expect(sum).to.eq(expectedVal)

        })

    }


    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

    })




    it('validate the first table', () => {

        calTable('t01',159)

    })

    it('validate the first table', () => {

        calTable('t02',163)
      
    })



})