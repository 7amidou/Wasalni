describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://localhost:4200/signin');
  });

  it('should login with empty password and empty email', () => {
    // Empty Email
    cy.get('[name="email"]').type('');
     // Empty Password
    cy.get('[name="password"]').type('');

    // Submit the form
    cy.get('[type="submit"]').click();
  });
});