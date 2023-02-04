import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("form renders correctly", () => {
    render(<Search />);

    const searchForm = screen.getByTestId("search-form");

    expect(searchForm).toBeInstanceOf(HTMLFormElement);
  });

  it("input renders correctly", () => {
    render(<Search />);

    const searchForm = screen.getByTestId("search-input");

    expect(searchForm).toBeInstanceOf(HTMLInputElement);
  });
});
