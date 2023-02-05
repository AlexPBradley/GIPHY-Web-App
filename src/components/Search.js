import React, { useState, useEffect } from "react";
import getGifs from "../requests/getGifs.js";
import PropTypes from "prop-types";
import "../styles/search.css";

const Search = ({ setGifResults, setResultsCount, setSearchValue }) => {
  const [value, setValue] = useState("");
  const [limitSelected, setLimitSelected] = useState(0);

  useEffect(() => {
    document.getElementById(
      "button-background"
    ).style.transform = `translate(${limitSelected}px)`;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGifResults(await getGifs(value));
    value
      ? setSearchValue(value.charAt(0).toUpperCase() + value.slice(1))
      : setSearchValue("Trending");
  };

  return (
    <div className="search">
      <form
        className="search-form"
        data-testid="search-form"
        onSubmit={handleSubmit}
      >
        <input
          className="search-input"
          data-testid="search-input"
          type="text"
          placeholder="Search..."
          onChange={(t) => setValue(t.target.value)}
        />
      </form>
      <div className="limitButtons">
        <button
          className="search-button"
          type="button"
          onClick={() => {
            setResultsCount(10);
            setLimitSelected(0);
          }}
        >
          <span id="button-background"></span>
          10
        </button>
        <button
          id="middle"
          className="search-button"
          type="button"
          onFocus={() => {
            setResultsCount(25);
            setLimitSelected(28);
          }}
        >
          25
        </button>
        <button
          className="search-button"
          type="button"
          onClick={() => {
            setResultsCount(50);
            setLimitSelected(55);
          }}
        >
          50
        </button>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setGifResults: PropTypes.func,
};
