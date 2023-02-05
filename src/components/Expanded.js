import React from "react";
import PropTypes from "prop-types";
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
        <div className="expanded-title">{selected?.title}</div>        
    </div>
  );
};

export default Expanded;

Expanded.propTypes = {
  selected: PropTypes.object,
  setIsSelected: PropTypes.func,
};
