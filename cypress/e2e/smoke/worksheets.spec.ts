describe("Loading the worksheets", function () {
    it("loads each worksheet directly", function () {
        ["addition", "subtraction", "multiplication", "division"].forEach((worksheet) => {
            cy.visit('/'+worksheet);
            //checks the menu is rendering on each page
            cy.worksheetMenuRenders();
            //checks the worksheet and canvas elements are rendering on each page
            cy.get('div[data-cy="worksheet-'+worksheet+'"]').should('be.visible');
            cy.problemsRender(10);
        })
    })
})