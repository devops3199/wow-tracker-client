context('Mocking Cookies', () => {
  beforeEach('Battlenet session cookie', () => {
    cy.setCookie('tracker.sig', 'tgqaGhA4jXl55lThzfz-b7UW7ok');
    cy.setCookie(
      'tracker',
      'eyJwYXNzcG9ydCI6eyJ1c2VyIjo3MDQyMjI5NDZ9LCJfZXhwaXJlIjoxNjQ4MjYwNDE5ODMzLCJfbWF4QWdlIjozNjAwMDAwfQ==',
    );
  });

  it('Login success w/ mocked cookies', () => {
    cy.visit('http://localhost:3000');

    cy.get('h3').contains('로그인 완료');
  });
});
