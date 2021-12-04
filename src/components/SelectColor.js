import React from "react";
import "../style/SelectColor.css";

const SelectColor = (props) => {
  const setActive = (color) =>
    document.querySelector(`.${color}`).classList.toggle("active");

  return (
    <div className="select">
      Wybierz kolor:
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
      <button
        className="blue"
        onClick={() => {
          props.click("blue");
          setActive("blue");
        }}
      ></button>
      <button
        className="green"
        onClick={() => {
          props.click("green");
          setActive("green");
        }}
      ></button>
      <button
        className="orange"
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
