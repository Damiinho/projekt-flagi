import React from "react";
import "../style/SmallOne.css";

const handleSmallOneClick = (props) => {
  console.log(`hej, państwo to ${props.name}`);
};

const SmallOne = (props) => {
  return (
    <img
      className="smallitem"
      src={props.img}
      alt="flaga"
      onClick={() => {
        handleSmallOneClick(props);
      }}
    ></img>
  );
};

export default SmallOne;
