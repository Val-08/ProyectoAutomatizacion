describe('Login de usuarios', () => {
  it('Logueo de los usuarios', () => {
    cy.visit('https://test-qa.inlaze.com/auth/sign-in');
    cy.get('input[formcontrolname="email"').type('pruebas@gmail.com');
    cy.get('input#password[type="password"]').type('Prueba1*');
    cy.get('button[type="submit"]').click();
  })
})