/// <reference types= "cypress" />

const { replace } = require("cypress/types/lodash");

describe('assigment ', () => {
    it('assigment for collect ', () => {
        cy.visit("https://www.automationteststore.com/");

        cy.get('#special > .container-fluid').find('.pricenew').invoke('text').then((new_price) => {
         
             cy.log(new_price.replace("$", "") );
             let ModifiedPrice = (new_price.replace("$",""))
             cy.log(ModifiedPrice)
              alert(`the sum of the new prices is  ${ModifiedPrice}`)
        })
        cy.get('#special > .container-fluid').find('.priceold').invoke('text').then((old_price) => {

            
            cy.log(old_price_price.replace("$", "") );
            let ModifiedPrice = (old_price_price.replace("$",""))
            cy.log(ModifiedPrice)
             alert(`the sum of the old prices is  ${ModifiedPrice}`)
        })



    });
});