/// <reference types="cypress" />

describe('The Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  context('name: validation error', () => {
    it('name: has the red border color and show error message when empty', () => {
      cy.get('input[name=name]')
        .focus()
        .blur()
        .should('have.css', 'border-color', 'rgb(211, 47, 47)');
      cy.get('p').should('exist').and('contain.text', 'Please enter your name');
    });

    it('name: has the red border color and show error message for too short name', () => {
      cy.get('input[name=name]')
        .type('fa')
        .blur()
        .should('have.css', 'border-color', 'rgb(211, 47, 47)');
      cy.get('p')
        .should('exist')
        .and('contain.text', 'Please enter a valid name');
    });

    it('name: has the green border color and not show any error message', () => {
      cy.get('input[name=name]')
        .type('faber')
        .blur()
        .should('have.css', 'border-color', 'rgb(56, 142, 60)');
    });
  });

  context('emial: validation error', () => {
    it('email: has the red border color and show error message when empty', () => {
      cy.get('input[name=email]')
        .focus()
        .blur()
        .should('have.css', 'border-color', 'rgb(211, 47, 47)');
      cy.get('p')
        .should('exist')
        .and('contain.text', 'Please enter your email');
    });

    it('email: has the red border color and show error message for too short name', () => {
      cy.get('input[name=email]')
        .type('faber.com')
        .blur()
        .should('have.css', 'border-color', 'rgb(211, 47, 47)');
      cy.get('p')
        .should('exist')
        .and('contain.text', 'Please enter a valid email address');
    });

    it('email: has the green border color and not show any error message', () => {
      cy.get('input[name=email]')
        .type('faber@gmail.com')
        .blur()
        .should('have.css', 'border-color', 'rgb(56, 142, 60)');
    });
  });

  context('message: validation error', () => {
    it('message: has the red border color and show error message when empty', () => {
      cy.get('textarea[name=message]')
        .focus()
        .blur()
        .should('have.css', 'border-color', 'rgb(211, 47, 47)');
      cy.get('p')
        .should('exist')
        .and('contain.text', 'Please enter your email');
    });

    it('message: has the green border color and not show any error message', () => {
      cy.get('textarea[name=message]')
        .type('Hola faber')
        .blur()
        .should('have.css', 'border-color', 'rgb(56, 142, 60)');
    });
  });
});

export {};
