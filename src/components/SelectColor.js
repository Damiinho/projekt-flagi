import React from "react";
import "../style/SelectColor.css";

const SelectColor = (props) => {
  const setActive = (color) =>
    document.querySelector(`.${color}`).classList.toggle("active");

  return (
    <div className="select">
      <p>Wybierz kolor:</p>
      <button
        className="red"
        onClick={() => {
          props.click("red");
          setActive("red");
        }}
      ></button>
      <button
        className="white"
        onClick={() => {
          props.click("white");
          setActive("white");
        }}
      ></button>
      <button
        className="black"
        onClick={() => {
          props.click("black");
          setActive("black");
        }}
      ></button>
      <button
        className="yellow"
        onClick={() => {
          props.click("yellow");
          setActive("yellow");
        }}
      ></button>
      {/* Zaznaczone: {props.selected.join(", ")} */}
    </div>
  );
};

export default SelectColor;
