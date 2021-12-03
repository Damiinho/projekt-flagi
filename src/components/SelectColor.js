import React from "react";

const SelectColor = (props) => {
  return (
    <div>
      Wybierz kolor:
      <button onClick={() => props.click("red")}>Czerwony</button>
      <button onClick={() => props.click("white")}>Biały</button>
      <button onClick={() => props.click("black")}>Czarny</button>
      <button onClick={() => props.click("yellow")}>Żółty</button>
      Zaznaczone: {props.selected.join(", ")}
    </div>
  );
};

export default SelectColor;
