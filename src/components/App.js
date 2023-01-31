import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import logo from "../styles/images/giphy-logo.jpg";
import getGifs from "../requests/getGifs";

const App = () => {
  const [trendingResults, setTrendingResults] = useState([]);
  console.log(trendingResults);

  // const searched = "";


  const handleLoad = async (event) => {
    event.preventDefault();
    setTrendingResults(await getGifs(trendingResults));
  };

  return (
    <div className="app" onLoad={handleLoad}>
      <img
        className="logo"
        src={logo}
        alt="giphy-logo"
      />
      <Search />
      <div className="gifs">
        {trendingResults.map((gif) => (
          <img className="gif" src={gif} alt="Gif" />
        ))}
      </div>
    </div>
  );
};

export default App;
