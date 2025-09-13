/// <reference types="cypress" />

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("https://githubfinder47377.netlify.app/");
  });

  describe("kind of unit tests", () => {
    it("navbar has logo and links", () => {
      cy.contains("a", /GitHub Finder/i);
      cy.contains("a", "Home");
      cy.contains("a", "About");
    });

    it("search inpt is present and typable", () => {
      cy.get('[name="text"]').should("be.visible");
      cy.get('[name="text"]').should("not.be.disabled");
    });
  });

  describe("end to end test", () => {
    it("testing full flow", () => {
      // enter a text
      cy.get('[name="text"]').type("Maanu07");

      // cy.wait(5000);  // waits for 5s

      // click on search button
      cy.get('input[value="Search"]').click();

      //card with h3 Maanu07 is visible
      cy.contains("h3", "Maanu07");

      // click on more
      cy.contains("more").click();

      // verify url
      cy.url().should(
        "eq",
        "https://githubfinder47377.netlify.app/user/Maanu07"
      );

      // verify anchor tag with href https://github.com/Maanu07
      cy.get('a[href="https://github.com/Maanu07"')
        .should("be.visible")
        .click();

      // opens manas github
      cy.origin("https://github.com", () => {
        cy.get('a[href="https://github.com/Maanu07"').should("be.visible");
        cy.url().should("eq", "https://github.com/Maanu07");
      });
    });
  });
});
