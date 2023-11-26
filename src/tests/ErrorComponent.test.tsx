import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorComponent from "../components/shared/ErrorContainer";

describe("ErrorComponent", () => {
  it("renders with default color if textColor prop is not provided", () => {
    render(<ErrorComponent errorText="Test Error" />);

    expect(screen.getByTestId("error-container")).toBeInTheDocument();
    expect(screen.getByTestId("error-text")).toHaveTextContent("Test Error");
  });

  it("renders with the provided textColor", () => {
    render(<ErrorComponent errorText="Test Error" textColor="blue" />);
    expect(screen.getByTestId("error-container")).toHaveStyle(
      "color: blue"
    );
  });

  it("renders the error text", () => {
    render(<ErrorComponent errorText="Test Error" />);
    const errorTextElement = screen.getByText("Test Error");

    expect(errorTextElement).toBeInTheDocument();
  });
});
