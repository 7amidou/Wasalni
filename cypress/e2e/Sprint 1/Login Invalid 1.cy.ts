describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://localhost:4200/signin');
  });

  it('should login with invalid password and valid email', () => {
    // Valid Email
    cy.get('[name="email"]').type('Ahmedmeherzi26@gmail.com');
     // Invalid Password
    cy.get('[name="password"]').type('InvalidPassword');

    // Submit the form
    cy.get('[type="submit"]').click();
  });
});