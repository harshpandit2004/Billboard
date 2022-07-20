import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"
import React from "react";

function Card(props){
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle">{props.subtitle}</h6>
        <p className="card-text">
          {props.body}
        </p>
      </div>
    </div>
  );
};
export default Card;