import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Expanded from "./Expanded.js";
import getGifs from "../requests/getGifs.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import logo from "../styles/images/giphy-logo.jpg";

const App = () => {
  const [gifResults, setGifResults] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState({});
  const [resultsCount, setResultsCount] = useState(25);
  const [searchValue, setSearchValue] = useState("Trending");

  useEffect(() => {
    if (gifResults.length === 0) {
      const trending = async () => {
        const data = await getGifs("");
        setGifResults(data);
      };
      trending();
    }
  }, []);

  return (
    <div className="app">
      <img className="logo" data-testid="logo" src={logo} alt="giphy-logo" />
      <Search
        setGifResults={setGifResults}
        setResultsCount={setResultsCount}
        setSearchValue={setSearchValue}
      />
      {isSelected ? (
        <Expanded
          results={gifResults}
          selected={selected}
          setIsSelected={setIsSelected}
        />
      ) : null}
      <h1>{searchValue} Results</h1>
      <SearchResults
        results={gifResults}
        resultsCount={resultsCount}
        setIsSelected={setIsSelected}
        setSelected={setSelected}
      />
      <a href="#top" className="page-top" data-testid="page-top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
};

export default App;
