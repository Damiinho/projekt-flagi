import React from "react";
import "../style/SelectRegion.css";

const SelectRegion = (props) => {
  const setActiveRegion = (item) => {
    document.querySelector(`.${item}`).classList.toggle("active");

    if (item === "europe") {
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "asia") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "oceania") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "north-america") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "south-america") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "africa") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "carraibean") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.antarctica`).classList.remove("active");
    } else if (item === "antarctica") {
      document.querySelector(`.europe`).classList.remove("active");
      document.querySelector(`.asia`).classList.remove("active");
      document.querySelector(`.oceania`).classList.remove("active");
      document.querySelector(`.north-america`).classList.remove("active");
      document.querySelector(`.south-america`).classList.remove("active");
      document.querySelector(`.africa`).classList.remove("active");
      document.querySelector(`.carraibean`).classList.remove("active");
    }
  };

  return (
    <div className="region">
      Wybierz region:
      <button
        className="region europe"
        onClick={() => {
          props.click("europe");
          setActiveRegion("europe");
        }}
      >
        Europa
      </button>
      <button
        className="region asia"
        onClick={() => {
          props.click("asia");
          setActiveRegion("asia");
        }}
      >
        Azja
      </button>
      <button
        className="region oceania"
        onClick={() => {
          props.click("oceania");
          setActiveRegion("oceania");
        }}
      >
        Australia/Oceania
      </button>
      <button
        className="region north-america"
        onClick={() => {
          props.click("north-america");
          setActiveRegion("north-america");
        }}
      >
        Ameryka Północna
      </button>
      <button
        className="region south-america"
        onClick={() => {
          props.click("south-america");
          setActiveRegion("south-america");
        }}
      >
        Ameryka Południowa
      </button>
      <button
        className="region africa"
        onClick={() => {
          props.click("africa");
          setActiveRegion("africa");
        }}
      >
        Afryka
      </button>
      <button
        className="region carraibean"
        onClick={() => {
          props.click("carraibean");
          setActiveRegion("carraibean");
        }}
      >
        Karaiby
      </button>
      <button
        className="region antarctica"
        onClick={() => {
          props.click("antarctica");
          setActiveRegion("antarctica");
        }}
      >
        Antarktyka
      </button>
    </div>
  );
};

export default SelectRegion;
