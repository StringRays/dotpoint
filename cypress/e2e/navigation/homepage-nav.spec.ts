describe("Navigating from the home page", function () {
    it("Navigates to each page and then clicks 'back'", function () {
        //visits home page
        cy.visit('/');
        //Check all menu tabs are rendering
        cy.mainMenuRenders();
    
        ["Addition", "Subtraction", "Multiplication", "Division"].forEach((worksheet) => {
            cy.contains(worksheet).click();
            cy.worksheetMenuRenders();

            cy.url().then((url) => {
                assert.equal(url, Cypress.config().baseUrl+worksheet.toLowerCase());
            });

            cy.go('back');
            cy.mainMenuRenders();
        });

        cy.contains("View All Symbols").click();
        cy.contains('Toggle Number Size').should('be.visible').and('be.enabled');

        cy.url().then((url) => {
            assert.equal(url, Cypress.config().baseUrl+'symbols');
        });

        cy.go('back');
        cy.mainMenuRenders();
        cy.url().then((url) => {
            assert.equal(url, Cypress.config().baseUrl);
        });
    });
    it("Navigates to each page and then clicks 'Home' or 'Return Home'", function () {
        //visits home page
        cy.visit('/');
        //Check all menu tabs are rendering
        cy.mainMenuRenders();
    
        ["Addition", "Subtraction", "Multiplication", "Division"].forEach((worksheet) => {
            cy.contains(worksheet).click();
            cy.worksheetMenuRenders();

            cy.url().then((url) => {
                assert.equal(url, Cypress.config().baseUrl+worksheet.toLowerCase());
            });

            cy.contains('Return Home').click();
            cy.mainMenuRenders();
        });

        cy.contains("View All Symbols").click();
        cy.contains('Toggle Number Size').should('be.visible').and('be.enabled');

        cy.url().then((url) => {
            assert.equal(url, Cypress.config().baseUrl+'symbols');
        });

        cy.contains('Home').click();
        cy.mainMenuRenders();
        cy.url().then((url) => {
            assert.equal(url, Cypress.config().baseUrl);
        });
    });
});