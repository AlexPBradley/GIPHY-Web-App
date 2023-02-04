import React from "react";
import "../styles/expanded.css";

const Expanded = ({ selected, setIsSelected }) => {
  return (
    <div className="expanded">
      <div className="background" onClick={() => setIsSelected()}></div>
        <img
          className="gif"
          data-testid="gif"
          src={selected?.images.downsized.url}
          alt="Gif"
        />
        <div className="test">{selected.title}</div>        
    </div>
  );
};

export default Expanded;
