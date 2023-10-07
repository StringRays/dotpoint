/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
        mainMenuRenders: typeof mainMenuRenders;
        worksheetMenuRenders: typeof worksheetMenuRenders;
        canvasRenders: typeof canvasRenders;
        problemsRender: typeof problemsRender;
        logStep: typeof logStep;
    }
  }
}

function mainMenuRenders() {
    const menuTabs = ["Home", "Addition", "Subtraction", "Multiplication", "Division", "Symbols"];
    menuTabs.forEach((tab) => {
        cy.contains(tab);
    })
}

function worksheetMenuRenders() {
  cy.get('div[data-cy="worksheet-menu"]').should('be.visible');
  const worksheetTabs = ["Print this Worksheet", "Generate New Worksheet", "Return Home"];
  worksheetTabs.forEach((tab) => {
      cy.contains(tab).should('be.visible');
  })
}

function canvasRenders(num: number) {
  cy.get('canvas')
    .should('be.visible')
    .then((canvas) => {
      assert.equal(canvas.length, num);
    })
}

//checks that problems are rendering for a worksheet
function problemsRender(num: number) {
  //checks all problems appear
  cy.get('div[data-cy="problem"]').then((problems) => {
    assert.equal(problems.length, num);
  });
  //checks all canvas elements appear
  cy.canvasRenders(num*3);
}

/*
  Helps make the logging visible in cypress 'open' mode, prints without decoration in 'run' mode
*/
function logStep(text: string) {
  if (Cypress.config("isInteractive")) {
    cy.task("log", "👀👀👀 " + text + " 👀👀👀");
  } else {
    cy.task("log", text);
  }
}

Cypress.Commands.add("mainMenuRenders", mainMenuRenders);

Cypress.Commands.add("worksheetMenuRenders", worksheetMenuRenders);

Cypress.Commands.add("canvasRenders", canvasRenders);

Cypress.Commands.add("problemsRender", problemsRender);

Cypress.Commands.add("logStep", logStep);

export {};