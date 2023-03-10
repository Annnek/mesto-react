import React from "react";
import "../index.css";

function PopupWithForm({ name, title, children, buttonText }) {
  return (
    <div className="popup popup_type_${name}">
      <div className="popup__container">
        <button className="popup__close" type="button" />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name}>
          {children}
          <button className="popup__save" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
