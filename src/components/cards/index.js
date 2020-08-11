import React from "react";
import "./style.css";

function GiantsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} onClick={props.handleIncrement} src={props.image} />
      </div>
    </div>
  );
}

export default GiantsCard;