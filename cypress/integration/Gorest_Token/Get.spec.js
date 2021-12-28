describe("verify the api with Bearer token",()=>{
    it("verify the number of users",()=>{
        cy.request({
            method:"GET",
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                Authorization:'Bearer 7e75e6429bfe639741052f2df7e09a422c3e68705f66dfc9f08631fed1c774f2'
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.body.data.length).to.eql(20)
           let el =  res.body.data.find(function(el){
                return el.id == 1578
        })
            // let obj = res.body.data.find(function(obj){
            //     return obj.id == 1985


            })
                    return el
            })

            

        })
    

