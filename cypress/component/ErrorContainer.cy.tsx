import React from "react";
import ErrorContainer from "../../src/components/shared/ErrorContainer";

describe("<ErrorComponent />", () => {
  it("render error", () => {
    cy.mount(<ErrorContainer errorText="Error text" />);
    cy.getDataTest("error-text").contains("Error text");
  });

  it("render color with text", () => {
    cy.mount(<ErrorContainer errorText="Info text" textColor="blue" />);
    cy.getDataTest("error-text").contains("Info text");
    cy.getDataTest("error-text")
      .should("have.css", "color")
      .then((color) => {
        expect(color).to.equal("rgb(0, 0, 255)");
      });
  });
});
