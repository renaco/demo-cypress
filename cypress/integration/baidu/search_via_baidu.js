import { Given, When, Then } from "cypress-cucumber-preprocessor";

Given('Visit baidu', () => {
    cy.visit('http://www.neoauto.com');
});

When('Search cypress-test via baidu', () => {
    cy.baiduSearch('cypress-test');
});

Then('The title should contain cypress-test', () => {
    cy.title().should('include', 'cypress-test');
});
