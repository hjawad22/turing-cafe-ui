describe('HomePage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', { 
      fixture: 'reservations.json' })
    cy.visit('http://localhost:3000/?name=sdf&date=fs&time=sfd&numberOfGuests=4')
  })

  it('should display title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })
})