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

  const setActiveOther = (item) => {
    document.querySelector(`.${item}`).classList.toggle("active");
  };

  return (
    <div className="stripes">
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
      <button
        className="stripes other-shipes"
        onClick={() => {
          props.clickOtherShipes();
          setActiveOther("other-shipes");
        }}
      >
        Inne ksz.
      </button>
      <button
        className="stripes symbols"
        onClick={() => {
          props.clickSymbols();
          setActiveOther("symbols");
        }}
      >
        Symbole
      </button>
    </div>
  );
};

export default SelectStripes;
