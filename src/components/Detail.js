import React from "react";
import "..//style/Detail.css";

const Detail = (props) => {
  if (props.data.region === "europe") {
    props.data.region = "Europa";
  } else if (props.data.region === "south-america") {
    props.data.region = "Ameryka Południowa";
  } else if (props.data.region === "north-america") {
    props.data.region = "Ameryka Północna";
  } else if (props.data.region === "asia") {
    props.data.region = "Azja";
  } else if (props.data.region === "arfica") {
    props.data.region = "Afryka";
  } else if (props.data.region === "oceania") {
    props.data.region = "Australia/Oceania";
  }

  if (props.data.name) {
    return (
      <div class="detail">
        Szczegóły:
        <p>{props.data.name}</p>
        <p>Region: {props.data.region}</p>
        <img src={props.data.img} alt={props.data.name} />
      </div>
    );
  } else return null;
};

export default Detail;
