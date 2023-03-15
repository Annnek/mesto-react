import React from "react";
import "../index.css";

function ImagePopup(card) {
  return (
    <div className="popup popup_type_preview">
      <figure className="popup__preview-container">
        <button className="popup__close" type="button"></button>
        <img className="popup__preview-image" src={card.link} alt={card.name} />
        <figcaption className="popup__preview-title">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
