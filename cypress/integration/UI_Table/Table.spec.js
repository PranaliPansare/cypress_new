describe("verify the tables", () => {
    it("verify the sum of tables in cypress ", () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.id('#t01', 159)
        cy.id('#t02', 322)
    })

    it.only("verify the sum of for cribuzz in cypress", () => {
        cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/38397/rsa-vs-ind-1st-test-india-tour-of-south-africa-2021-22')
        cy.Table(1)
        cy.Table(2)
        cy.Table(3)
        cy.Table(4)
    })






})