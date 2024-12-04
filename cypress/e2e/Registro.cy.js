describe('Validaciones en el Registro de Usuario', () => {
  it('Debería mostrar error si el nombre tiene menos de dos palabras', () => {
    cy.visit('https://test-qa.inlaze.com/auth/sign-up');
    cy.get('input[formcontrolname="fullName"]').type('Val'); // Dos palabras
    cy.get('input[formcontrolname="email"]').type('prueba@gmail.com');
    cy.get('input#password[type="password"]').type('Pass@1234');
    cy.get('input#confirm-password[type="password"]').type('Pass@1234');
    cy.get('button[type="submit"]').click();
    cy.contains('El nombre debe contener al menos dos palabras').should('be.visible');
  });
});


