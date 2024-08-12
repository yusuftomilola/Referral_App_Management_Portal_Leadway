Cypress.on('uncaught:exception', (err, runnable) => {
    // prevents uncaught exceptions
    return false;
  });

describe('Login Form', () => {
    beforeEach(() => {
      // Visit the page where the login form is located
      cy.visit('/') 
    })
  
    it('should login successfully with correct credentials', () => {
      // Type 'admin' into the username field
      cy.get('#username')
        .type('admin')
        .should('have.value', 'admin')
  
      // Type 'admin' into the password field
      cy.get('#password')
        .type('admin')
        .should('have.value', 'admin')
  
      // Check the 'Keep me logged in' checkbox
      cy.get('#keepLoggedIn')
        .should('be.checked')
  
      // Click the login button
      cy.get('button[type="submit"]').click()
  
      //assertions here to verify successful login
      // checks if a welcome message appears
     
      cy.contains('Welcome').should('be.visible')
    })
  
    it('should show password when "SHOW" is clicked', () => {
      cy.get('#password')
        .should('have.attr', 'type', 'password')
  
      cy.get('.show-password').click()
  
      cy.get('#password')
        .should('have.attr', 'type', 'text')
    })
  
    it('should have a working "Reset Password" link', () => {
      cy.get('.reset-password')
        .should('have.attr', 'href', '#')
        .click()
  
    
    })
  
    it('should have a working "Sign Up" link', () => {
      cy.get('.signupP')
        .should('have.attr', 'href', '#')
        .click()
  
    })
  })