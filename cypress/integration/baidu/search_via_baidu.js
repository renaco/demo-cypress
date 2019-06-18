import { Given, When, Then } from "cypress-cucumber-preprocessor";

Given('Visit baidu', () => {
    cy.visit('https://codepen.io/renaco/full/NZxdax')
});

When('Search cypress-test via baidu', () => {
    cy.baiduSearch('cypress-test')
});

Then('The title should contain cypress-test', () => {
    cy.title().should('include', 'cypress-test')
});
