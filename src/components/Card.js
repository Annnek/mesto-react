import React from "react";
import "../index.css";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card__item">
      <button className="card__trash"></button>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__name">
        <h2 className="card__title overflow">{card.name}</h2>
        <div>
          <button className="card__like-icon" type="button"></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
