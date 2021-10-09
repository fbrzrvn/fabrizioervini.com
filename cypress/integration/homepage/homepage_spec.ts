describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('cy.location() navigates to the url', () => {
    it("renders '/' location", () => {
      cy.location().should(location => {
        expect(location.href).to.eq(`${Cypress.env('baseUrl')}/`);
        expect(location.pathname).to.eq('/');
      });
    });
  });

  context('renders the english hero text elements', () => {
    it('renders the title', () => {
      cy.get('h1').contains("Hi! I'm faber");
    });

    it('renders the subtitle', () => {
      cy.get('p').contains(
        'Born and raised in Italy, after travel around the world I finally settled in the sunny Barcelona, Spain. Well organized person, problem solver, with high attention to details. Looking forward to work in ambitious projects with positive people.',
      );
    });

    it('render the button', () => {
      cy.get('a').contains('View my Works');
    });
  });

  context('render navbar links', () => {
    it('check the lenght of link and if the fist is About', () => {
      cy.get('li > a').and($a => {
        expect($a).to.have.length(4);
        expect($a.first()).to.contain('About');
      });
    });
  });
});
