import React from "react";
import PropTypes from "prop-types";
import "../styles/searchResults.css";

const SearchResults = ({ results, resultsCount, setIsSelected, setSelected }) => {
  return (
    <div className="search-results">
      {results?.map((gif, index) => index < resultsCount && (
        <img
          key={gif.id}
          className="gif"
          data-testid="gif"
          src={gif.images.downsized.url}
          alt="Gif"
          onClick={() => {
            setSelected(gif);
            setIsSelected(true);
          }}
        />
      ))}
    </div>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array,
  resultsCount: PropTypes.number,
  setIsSelected: PropTypes.func,
  setSelected: PropTypes.func,
};
