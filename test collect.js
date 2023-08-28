describe('assigment ', () => {
    it('bla bla ', () => {
        cy.visit("https://www.automationteststore.com/");

        cy.get('#special > .container-fluid').find('.pricenew').invoke('text').then((new_price) => {
            cy.log(new_price)
        })
        cy.get('#special > .container-fluid').find('.priceold').invoke('text').then((old_price) => {
            cy.log(old_price)
        })



    });
});