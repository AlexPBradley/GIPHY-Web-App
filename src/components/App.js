import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Expanded from "./Expanded";
import logo from "../styles/images/giphy-logo.jpg";

const App = () => {
  const [gifResults, setGifResults] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState();

  return (
    <div className="app">
      <img className="logo" src={logo} alt="giphy-logo" />
      <Search setGifResults={setGifResults} />
      {isSelected ? (
        <Expanded
          results={gifResults}
          selected={selected}
          setIsSelected={setIsSelected}
        />
      ) : null}
      <SearchResults
        results={gifResults}
        isSelected={setIsSelected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default App;
