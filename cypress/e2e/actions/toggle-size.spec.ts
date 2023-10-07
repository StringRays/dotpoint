describe("Loading the view symbols page", function () {
    const sizes = ["small", "med", "large", "xs", "small"]
    it("Toggles the button and ensures classes change", function () {
        cy.visit('/symbols');

        cy.contains('Toggle Number Size').should('be.visible').and('be.enabled').as('toggle');

        sizes.forEach((size) => {
            cy.get('canvas.'+size+'Num').then((canvas) => {
                assert.equal(canvas.length, 10);
            });
            cy.get('canvas.'+size+'Op').then((canvas) => {
                assert.equal(canvas.length, 5);
            });
            cy.get('@toggle').click();
            //making sure menu doesn't disappear
            cy.mainMenuRenders();
            //making sure previous classes are gone
            cy.get('canvas.'+size+'Num').should('not.exist');
            cy.get('canvas.'+size+'Op').should('not.exist');
        })
    });
});