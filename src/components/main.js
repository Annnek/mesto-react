import React from "react";
import "../index.css";
import avatarProfile from "../images/avatarProfile.jpg";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  //onEditProfile, onAddPlace, onEditAvatar - вызов соответствующих функций из переданных пропсов
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__button-edit-avatar"
            type="button"
            onClick={onEditAvatar}>
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
              onClick={onEditProfile}></button>
            <h2 className="profile__subtitle overflow">Исследователь океана</h2>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="card"></ul>
      </section>
    </main>
  );
}

export default Main;
