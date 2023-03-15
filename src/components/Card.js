import React from "react";
import "../index.css";

function Card({ card }) {
  return (
    <div id="card-template" key={card.id}>
      <li className="card__item">
        <button className="card__trash"></button>
        <img className="card__image" src={card.link} alt={card.name} />
        <div className="card__name">
          <h2 className="card__title overflow">{card.name}</h2>
          <div>
            <button className="card__like-icon" type="button"></button>
            <div className="card__like-counter">{card.likes.length}</div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
