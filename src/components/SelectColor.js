import React from "react";
import "../style/SelectColor.css";

const SelectColor = (props) => {
  const setActive = (color) =>
    document.querySelector(`.${color}`).classList.toggle("active");

  return (
    <div className="colors">
      Wybierz kolor:
      <button
        className="color red"
        onClick={() => {
          props.click("red");
          setActive("red");
        }}
      ></button>
      <button
        className="color white"
        onClick={() => {
          props.click("white");
          setActive("white");
        }}
      ></button>
      <button
        className="color black"
        onClick={() => {
          props.click("black");
          setActive("black");
        }}
      ></button>
      <button
        className="color yellow"
        onClick={() => {
          props.click("yellow");
          setActive("yellow");
        }}
      ></button>
      <button
        className="color blue"
        onClick={() => {
          props.click("blue");
          setActive("blue");
        }}
      ></button>
      <button
        className="color green"
        onClick={() => {
          props.click("green");
          setActive("green");
        }}
      ></button>
      <button
        className="color orange"
        onClick={() => {
          props.click("orange");
          setActive("orange");
        }}
      ></button>
      {/* Zaznaczone: {props.selected.join(", ")} */}
    </div>
  );
};

export default SelectColor;
