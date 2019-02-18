describe('Visit a page', function() {
  it('Visit my web page', function() {
    cy.visit('http://localhost:3000')

    cy.pause()
    cy.contains('Sign In').click()
    cy.url().should('include', '/signin')

    cy.get('input[name="email"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})