/// <reference types="cypress"/>
describe('Se visualiza la pagina principal', () => {
	it('App renderiza correctamente', () => {
		cy.visit('http://localhost:5173/')
	})
})

