import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
        {results.map((gif) => (
          <img className="gif" src={gif} alt="Gif" />
        ))}
    </div>
  );
};

export default SearchResults;
