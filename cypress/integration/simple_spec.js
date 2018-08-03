describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('My Second Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(false)
  })
})

describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
  })
})
