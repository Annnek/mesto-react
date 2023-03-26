import React from "react";
import "../index.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  const buttonCardTrash = `card__trash ${isOwner ? "card__trash" : ""}`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const buttonLikeCard = `card__like-icon ${
    isLiked ? "card__like-icon_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="card__item">
      <button
        className={buttonCardTrash}
        type="button"
        onClick={handleDeleteClick}></button>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__name">
        <h2 className="card__title overflow">{card.name}</h2>
        <div>
          <button
            type="button"
            className={buttonLikeCard}
            onClick={handleLikeClick}></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
