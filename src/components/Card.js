import React from "react";
import "./Card.css";

function Card({ image, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
