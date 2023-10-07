describe("Loading the home page", function () {
    const sectionName = ["Worksheet Generator", "Instructions", "Explanation"];
    it("Renders text", function () {
        //visits home page
        cy.visit('/');
        //Check all menu tabs are rendering
        cy.mainMenuRenders();
        cy.logStep("Main menu is appearing")
        //check all section names are rendering
        sectionName.forEach((name) => {
            cy.contains(name);
        });
        cy.logStep("Section names are appearing");
    })
})