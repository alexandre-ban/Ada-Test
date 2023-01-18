describe('Teste de resolução', () => {
  it('Youtube', () => {
    cy.visit('https://www.youtube.com')
    cy.get('#search-input > #search').type('acapella pirates of the caribbean')
    cy.get('#search-icon-legacy > yt-icon.style-scope').click()
    cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click()
    cy.wait(25000)
    cy.get('.ytp-settings-button').click()
    cy.get(':nth-child(4) > .ytp-menuitem-content').click()
    cy.wait(5000)
    cy.get(':nth-child(5) > .ytp-menuitem-label').click()
    cy.wait(10000)
    cy.get('.ytp-settings-button').click()
    cy.get(':nth-child(4) > .ytp-menuitem-content').click()
    cy.wait(5000)
    cy.get(':nth-child(2) > .ytp-menuitem-label').click()
    cy.wait(2000)
  })
})