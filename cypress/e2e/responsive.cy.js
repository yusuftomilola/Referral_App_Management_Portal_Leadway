Cypress.on('uncaught:exception', (err, runnable) => {
  // prevents uncaught exceptions
  return false;
});

describe('Responsive Design', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/layout/index.html');
  });

  it('should display sidebar correctly on large screens', () => {
    cy.viewport('macbook-15');
    cy.get('aside.lg\\:flex').should('be.visible');
    cy.get('#hamburger').should('not.be.visible');
  });

  it('should hide desktop sidebar and show hamburger menu on small screens', () => {
    cy.viewport('iphone-6');
    cy.get('aside.lg\\:flex').should('not.be.visible');
    cy.get('#hamburger').should('be.visible');
    cy.get('#mobile-menu').should('not.be.visible');
  });

  it('should open and close mobile menu on small screens', () => {
    cy.viewport('iphone-6');
    cy.get('#hamburger').click();
    cy.get('#mobile-menu').should('be.visible');
    cy.get('#close-menu').click();
    cy.get('#mobile-menu').should('not.be.visible');
  });

  it('should adjust layout and content correctly on different screen sizes', () => {
    const sizes = [
      'iphone-6',
      'ipad-2',
      'macbook-13',
      'macbook-15'
    ];

    sizes.forEach(size => {
      cy.viewport(size);
      cy.get('#content').should('be.visible');
      
      if (['iphone-6', 'ipad-2'].includes(size)) {
        cy.get('#hamburger').should('be.visible');
        cy.get('aside.lg\\:flex').should('not.be.visible');
        
        // For mobile, open menu before clicking
        cy.get('#hamburger').click();
        cy.get('#mobile-menu [data-page="../pages/dashboard.html"]').click();
      } else {
        cy.get('#hamburger').should('not.be.visible');
        cy.get('aside.lg\\:flex').should('be.visible');
        
        // For desktop, click directly on sidebar
        cy.get('aside [data-page="../pages/dashboard.html"]').first().click();
      }

      cy.get('#content').should('contain', 'Welcome');
      cy.get('#myChart3').should('exist');

      // Navigate to Reports page
      if (['iphone-6', 'ipad-2'].includes(size)) {
        cy.get('#hamburger').click();
        cy.get('#mobile-menu [data-page="../pages/reports.html"]').first().click();
      } else {
        cy.get('aside [data-page="../pages/reports.html"]').first().click();
      }

      cy.get('#content').should('contain', 'Reports');
      cy.get('#myChart5').should('exist');
    });
  });

  it('should display charts correctly on different screen sizes', () => {
    const sizes = [
      'iphone-6',
      'ipad-2',
      'macbook-13',
      'macbook-15'
    ];

    sizes.forEach(size => {
      cy.viewport(size);

      // Check dashboard chart
      if (['iphone-6', 'ipad-2'].includes(size)) {
        cy.get('#hamburger').click();
        cy.get('#mobile-menu [data-page="../pages/dashboard.html"]').first().click();
      } else {
        cy.get('aside [data-page="../pages/dashboard.html"]').first().click();
      }

      cy.get('#content').should('contain', 'Welcome');
      cy.get('#myChart3').should('exist').and(($el) => {
        expect($el.width()).to.be.greaterThan(0);
        expect($el.height()).to.be.greaterThan(0);
      });

      // Check reports chart
      if (['iphone-6', 'ipad-2'].includes(size)) {
        cy.get('#hamburger').click();
        cy.get('#mobile-menu [data-page="../pages/reports.html"]').first().click();
      } else {
        cy.get('aside [data-page="../pages/reports.html"]').first().click();
      }

      cy.get('#content').should('contain', 'Reports');
      cy.get('#myChart5').should('exist').and(($el) => {
        expect($el.width()).to.be.greaterThan(0);
        expect($el.height()).to.be.greaterThan(0);
      });
    });
  });
});