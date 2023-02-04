import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  it("logo renders", () => {
    render(<App />);
    
    const logo = screen.getByTestId("logo");

    expect(logo).toBeInstanceOf(HTMLImageElement);
    expect(logo).toHaveClass("logo");
  });

  it("page top renders", () => {
    render(<App />);

    const pageTop = screen.getByTestId("page-top");

    expect(pageTop).toBeInstanceOf(HTMLAnchorElement);
    expect(pageTop).toHaveClass("page-top");
  });
});
