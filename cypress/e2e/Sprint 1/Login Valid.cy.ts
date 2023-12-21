describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost:4200/signin');
  });

  it('should login with valid credentials', () => {
    // Fill  the email and password fields
    cy.get('[name="email"]').type('Ahmedmeherzi26@gmail.com');
    cy.get('[name="password"]').type('zdzdzd');

    // Submit the form
    cy.get('[type="submit"]').click();
  });
});