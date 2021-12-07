import React from "react";
import "../style/SelectColor.css";

const SelectColor = (props) => {
  const setActive = (color) =>
    document.querySelector(`.${color}`).classList.toggle("active");

  return (
    <div className="colors">
      <button
        className="color red"
        onClick={() => {
          props.click("red");
          setActive("red");
        }}
      >
        Czerwony
      </button>
      <button
        className="color white"
        onClick={() => {
          props.click("white");
          setActive("white");
        }}
      >
        Biały
      </button>
      <button
        className="color black"
        onClick={() => {
          props.click("black");
          setActive("black");
        }}
      >
        Czarny
      </button>
      <button
        className="color yellow"
        onClick={() => {
          props.click("yellow");
          setActive("yellow");
        }}
      >
        Żółty
      </button>
      <button
        className="color blue"
        onClick={() => {
          props.click("blue");
          setActive("blue");
        }}
      >
        Niebieski
      </button>
      <button
        className="color green"
        onClick={() => {
          props.click("green");
          setActive("green");
        }}
      >
        Zielony
      </button>
      <button
        className="color orange"
        onClick={() => {
          props.click("orange");
          setActive("orange");
        }}
      >
        Pomarańczowy
      </button>
      {/* Zaznaczone: {props.selected.join(", ")} */}
    </div>
  );
};

export default SelectColor;
