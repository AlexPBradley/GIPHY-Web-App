import React, { useState } from "react";
import getGifs from "../requests/getGifs.js";
import PropTypes from "prop-types";
import "../styles/search.css";

const Search = ({ setGifResults, setResultsCount }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGifResults(await getGifs(value));
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
          onClick={() => setResultsCount(10)}
        >
          10
        </button>
        <button
          id="middle"
          className="search-button"
          type="button"
          onFocus={() => setResultsCount(25)}
        >
          25
        </button>
        <button
          className="search-button"
          type="button"
          onClick={() => setResultsCount(50)}
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
