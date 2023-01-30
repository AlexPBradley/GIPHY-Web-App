import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import logo from "../styles/images/giphy-logo.jpg";
import getGifs from "../requests/getGifs";

const App = () => {

  const [request, setRequest] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRequest(await getGifs(request));
  };

  return (
    <div className="app">
      <img className="logo" src={logo} alt="giphy-logo" onClick={handleSubmit}></img>
      <Search />
    </div>
  );
}

export default App;
