/// <reference types="cypress"/>

describe("Testing search in Header component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Assert if MercadoLibre icon was shown", () => {
    cy.get(".logo", { timeout: 1000 }).should("be.visible");

  });
  it("Assert if the placeholder is correct", () => {
    cy.url().should("include", "5173");
    cy.get("#search").then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "Nunca dejes de buscar");
    });
  });
  it("Assert if logo is rendered and it redirect to Home Page", () => {
    cy.visit("/items?search=mate");
    cy.get(".logo", { timeout: 2000 }).eq(0).click();
  });

  it("From Home page searching by Product id", () => {
    cy.get("#search").type("MLA1216206022").should("be.visible");
    cy.get("#search-button").click();
    cy.get(".container__card-product").children().should("be.visible");
    cy.get(".container__card-product").children().eq(3).click();
    cy.url().should("include", "/items/MLA1216206022");
  });
});

