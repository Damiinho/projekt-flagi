import React from "react";
import "../style/SelectOther.css";

const SelectOther = (props) => {
  const handleCountryButton = () => {
    if (
      document.querySelector(".countries").classList.contains("onlycountries")
    ) {
      document.querySelector(".countries").textContent =
        "Przeszukaj tylko bazę krajów";
    } else {
      document.querySelector(".countries").textContent =
        "Przeszukaj bazę wszystkich flag";
    }
    document.querySelector(".countries").classList.toggle("onlycountries");
  };

  return (
    <div className="other">
      <button
        className="other countries"
        onClick={() => {
          props.clickCountry();
          handleCountryButton();
        }}
      >
        Przeszukaj tylko bazę krajów
      </button>
      <button
        className="other reset"
        onClick={() => {
          props.clickReset();
        }}
      >
        Resetuj
      </button>
    </div>
  );
};

export default SelectOther;
