/// <reference types="cypress"/>

describe("Testing navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  afterEach(() => {
    cy.wait(2000);
    cy.visit("/");
  });

  it("From Home page searching to List Items, and getting details", () => {
    cy.get("#search").type("notebook").should("be.visible");
    cy.get("#search-button").click();
    cy.get(".container__card-product").children().should("be.visible");
    cy.get(".container__card-product").children().eq(3).click();
  });

  it("Assert when going back, the home page still has all components rendered", () => {
    cy.url().should("include", "5173");
    cy.get("#search").then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "Nunca dejes de buscar");
    });
  });

  it("avoid repeated input search", () => {
    cy.get('input[placeholder="Nunca dejes de buscar"]')
      .parents("form")
      .then((form) => {
        const inputs = form.find("input");
        expect(inputs.length).to.equal(1);
        cy.wrap(inputs).should("have.length", 1);
        cy.log("Quantity if inputs", inputs.length);
      });
  });
});
