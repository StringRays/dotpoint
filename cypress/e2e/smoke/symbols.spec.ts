describe("Loading the view symbols page", function () {
    it("menu, text, and buttons are rendering", function () {
        cy.visit('/symbols');

        cy.mainMenuRenders();
        cy.contains('Toggle Number Size').should('be.visible').and('be.enabled');
        cy.contains('numbers at different sizes').should('be.visible');

        cy.canvasRenders(15);
        //one of each number appears
        for (let i = 0; i < 10; i++){
            cy.get('canvas[data-cy="'+i+'"]')
                .should('be.visible')
                .then((canv) => {
                    assert.equal(canv.length, 1);
                });
        }
        //one of each operator appears
        ["+", "/", "-", "x", "="].forEach((symbol) => {
            cy.get('canvas[data-cy="'+symbol+'"]')
                .should('be.visible')
                .then((canv) => {
                    assert.equal(canv.length, 1);
                });
        })
    });
});