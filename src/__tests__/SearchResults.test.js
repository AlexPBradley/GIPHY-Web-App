import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
import data from "../data/data.json";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("gif renders correctly", () => {
    render(<SearchResults results={data}/>);

    const gif = screen.getAllByTestId("gif");

    expect(gif).toBeInstanceOf(Array);
  });
});
