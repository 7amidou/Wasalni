describe('Publier Trajet', () => {
  beforeEach(() => {
    // Visit the page
    cy.visit('http://localhost:4200/annonce');
  });

  it('should submit the form with valid data', () => {
    // Fill in the form fields
    cy.get('[name="dep"]').select('Ariana');
    cy.get('[name="des"]').select('Beja');
    cy.get('[name="nbr"]').select('2');
    cy.get('[name="prix"]').type('20');
    cy.get('[name="date"]').type('2023-12-31');
    cy.get('[name="tele"]').type('25250942');

    // Submit the form
    cy.get('[type="submit"]').click();

    // Check for a success message
    cy.get('.alert-success').should('be.visible');
  });
});
