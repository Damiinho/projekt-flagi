import React from "react";

const Detail = (props) => {
  if (props.data.name) {
    return (
      <div>
        Szczegóły wybranej flagi:
        <p>{props.data.name}</p>
        <p>{props.data.region}</p>
        <img src={props.data.img} alt={props.data.name} />
      </div>
    );
  } else return null;
};

export default Detail;
