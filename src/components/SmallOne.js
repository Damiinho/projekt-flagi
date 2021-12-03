import React from "react";
import "../style/SmallOne.css";

const SmallOne = (props) => {
  return (
    <img
      className="smallitem"
      src={props.img}
      alt="flaga"
      onClick={() => props.click(props)}
    ></img>
  );
};

export default SmallOne;
