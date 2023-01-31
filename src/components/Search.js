import React, { useState } from "react";
import getGifs from "../requests/getGifs";
import "../styles/search.css"

const Search = ({ setGifResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGifResults(await getGifs(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(t) => setValue(t.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
