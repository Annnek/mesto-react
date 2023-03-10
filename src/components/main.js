import React from "react";
import "../index.css";
import avatarProfile from "../images/avatarProfile.jpg";

function Main() {
  const handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector(".popup_type_avatar");
    popupEditAvatar.classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    const popupEditProfile = document.querySelector(".popup_type_profile");
    popupEditProfile.classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    const popupAddPlace = document.querySelector(".popup_type_add-card");
    popupAddPlace.classList.add("popup_opened");
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__button-edit-avatar"
            type="button"
            onClick={handleEditAvatarClick}>
            <img
              className="profile__avatar"
              src={avatarProfile}
              alt="Фотография Кусто"
            />
          </button>
          <div className="profile__title-block">
            <h1 className="profile__title overflow">Жак-Ив Кусто</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={handleEditProfileClick}></button>
            <h2 className="profile__subtitle overflow">Исследователь океана</h2>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="card"></ul>
      </section>
    </main>
  );
}

export default Main;
