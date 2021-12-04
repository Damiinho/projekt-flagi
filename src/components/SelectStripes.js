import React from "react";
import "../style/SelectStripes.css";

const SelectStripes = (props) => {
  const setActiveVertical = () => {
    document.querySelector(".vertical").classList.toggle("active");
    if (document.querySelector(".horizontal").classList.contains("active")) {
      document.querySelector(".horizontal").classList.remove("active");
    }
  };

  const setActiveHorizontal = () => {
    document.querySelector(".horizontal").classList.toggle("active");
    if (document.querySelector(".vertical").classList.contains("active")) {
      document.querySelector(".vertical").classList.remove("active");
    }
  };

  return (
    <div className="select stripes">
      Rodzaj pasków:
      <button
        className="stripes vertical"
        onClick={() => {
          props.click("vertical");
          setActiveVertical();
        }}
      >
        pionowe
      </button>
      <button
        className="stripes horizontal"
        onClick={() => {
          props.click("horizontal");
          setActiveHorizontal();
        }}
      >
        poziome
      </button>
    </div>
  );
};

export default SelectStripes;
