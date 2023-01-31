import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import logo from "../styles/images/giphy-logo.jpg";

const App = () => {
  const [gifResults, setGifResults] = useState([]);

  return (
    <div className="app">
      <img
        className="logo"
        src={logo}
        alt="giphy-logo"
      />
      <Search setGifResults={setGifResults} />
      <SearchResults results={gifResults} />
    </div>
  );
};

export default App;
