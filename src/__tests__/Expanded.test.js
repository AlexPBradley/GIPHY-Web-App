import React from "react";
import { render, screen } from "@testing-library/react";
import Expanded from "../components/Expanded";

describe("Expanded", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Expanded />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("expanded gif renders", () => {
    render(<Expanded />);

    const gif = screen.getByTestId("gif");

    expect(gif).toBeInstanceOf(HTMLImageElement);
  });

  it("title renders", () => {
    render(<Expanded />);

    const expandedTitle = screen.getByTestId("expanded-title");

    expect(expandedTitle).toBeInstanceOf(HTMLDivElement);
  });
});
