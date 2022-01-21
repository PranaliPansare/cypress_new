describe("verify the table code", () => {
    let sum = 0
    it("verify the table code", () => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('of undefined')
            done()
            return false
        });
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#t01').find('tbody').children().each((el, index) => {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
         }).then(function(){
            cy.log(sum)
            expect(sum).to.eqls(159)
        })

    })

    })

    describe("verify the table code", () => {
        let sum = 0
        it("verify the table code", () => {
            cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
            cy.get('#t02').find('tbody').children().each((el, index) => {
                if (index != 0) {
                    sum = sum + Number(el.children().last().text())
                }
    
            }).then(function(){
                cy.log(sum)
                expect(sum).to.eqls(163)
            })
        })
    })