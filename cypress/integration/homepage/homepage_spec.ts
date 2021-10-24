/// <reference types="cypress" />

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('cy.location() navigates to the urls', () => {
    it("renders '/' location", () => {
      cy.location().should((location) => {
        expect(location.href).to.eq(`${Cypress.env('baseUrl')}/`);
        expect(location.pathname).to.eq('/');
      });
    });

    it("renders '/' button", () => {
      cy.get('p').contains('faber').click();
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/');
      });
    });

    it("renders '/contact' button", () => {
      cy.get('a')
        .contains('Contact Me')
        .should('have.attr', 'href', '/contact')
        .click();
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/contact');
      });
    });
  });

  context('renders navbar links', () => {
    it('check the lenght of link and if the fist one is About', () => {
      cy.get('li > a').and(($a) => {
        expect($a).to.have.length(4);
        expect($a.first()).to.contain('About');
      });
    });

    it('add active class on links when clicked', () => {
      cy.get('li > a').click({ multiple: true }).should('have.class', 'active');
    });
  });

  context('renders the hero text elements', () => {
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
});

export {};
