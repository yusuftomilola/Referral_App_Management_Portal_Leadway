Cypress.on('uncaught:exception', (err, runnable) => {
    // prevents uncaught exceptions
    return false;
  });
  
  describe('Navigation and Responsiveness Tests', () => {
    describe('Desktop Navigation', () => {
      beforeEach(() => {
        cy.viewport(1280, 800);
        cy.visit('http://127.0.0.1:5501/layout/index.html');
        cy.wait(1000);
      });
  
      it('should have a visible sidebar', () => {
        cy.get('aside').first().should('be.visible');
      });
  
      it('should navigate to Dashboard page', () => {
        cy.get('[data-page="../pages/dashboard.html"]').first().click();
        cy.get('#content').should('contain', 'Welcome');
      });
  
      it('should navigate to Prospects page', () => {
        cy.get('[data-page="../pages/prospects.html"]').first().click();
        cy.get('#content').should('contain', 'Prospects');
      });
  
      it('should navigate to Reports page', () => {
        cy.get('[data-page="../pages/reports.html"]').first().click();
        cy.get('#content').should('contain', 'Reports');
      });
  
      it('should navigate to Settings page', () => {
        cy.get('[data-page="../pages/settings.html"]').first().click();
        cy.get('#content').should('contain', 'Settings');
      });
  
      it('should highlight active nav item', () => {
        cy.get('[data-page="../pages/prospects.html"]').first().click();
        cy.get('[data-section="prospects"]').first().should('have.class', 'bg-[#E6B014]');
      });
    });
  
    describe('Mobile Responsiveness', () => {
      beforeEach(() => {
        cy.viewport(375, 667);
        cy.visit('http://127.0.0.1:5501/layout/index.html');
        cy.wait(1000);
      });
  
      it('should hide desktop sidebar and show hamburger menu', () => {
        cy.get('aside.lg\\:flex').should('not.be.visible');
        cy.get('#hamburger').should('be.visible');
      });
  
      it('should open and close the mobile sidebar menu', () => {
        cy.get('#mobile-menu').should('not.be.visible');
        cy.get('#hamburger').click();
        cy.get('#mobile-menu').should('be.visible');
        cy.get('#close-menu').click();
        cy.get('#mobile-menu').should('not.be.visible');
      });
  
      it('should navigate using mobile menu', () => {
        cy.get('#hamburger').click();
        cy.get('#mobile-menu [data-page="../pages/prospects.html"]').click();
        cy.get('#content').should('contain', 'Prospects');
      });
    });
  });