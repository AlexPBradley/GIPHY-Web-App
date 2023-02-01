import React from "react";
import PropTypes from "prop-types";
import "../styles/searchResults.css";

const SearchResults = ({ results, isSelected, setSelected }) => {
  return (
    <div className="search-results">
      {results.map((gif) => (
        <img
          className="gif"
          src={gif.images.downsized.url}
          alt="Gif"
          onClick={() => {
            setSelected(gif);
            isSelected(true);
          }}
        />
      ))}
    </div>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
