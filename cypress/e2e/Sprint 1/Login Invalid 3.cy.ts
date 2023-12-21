describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://localhost:4200/signin');
  });

  it('should login with valid password and invalid email', () => {
    // Invalid Email
    cy.get('[name="email"]').type('InvalidMail');
     // valid Password
    cy.get('[name="password"]').type('zdzdzd');

    // Submit the form
    cy.get('[type="submit"]').click();
  });
});