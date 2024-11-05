import { baseUrl } from 'support/constants';

describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('#app[hydrated=true]', { timeout: 10000 });
  });

  it('homepage loads and displays logo', () => {
    cy.get('.logo-link').should('have.attr', 'href', '/');
  });

  it('homepage loads and shows videos', () => {
    cy.get('.section-title > .title', { timeout: 10000 }).should('have.text', 'Trending videos');

    cy.get(
      '.home-videos-container > .video-entry:first > .video-entry-info > .video-info-text > .video-entry-title'
    ).should('exist');
  });
});
