import React from "react";
import "../index.css";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main />

        {/* EDIT POPUP */}
        <div className="popup popup_type_edit">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form
              className="popup__form popup__edit-form"
              name="edit-form"
              novalidate>
              <input
                className="popup__input popup__input_type_name"
                type="text"
                name="name"
                id="inputName"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="inputName-error popup__input-error"></span>
              <input
                className="popup__input popup__input_type_job"
                type="text"
                name="about"
                id="inputJob"
                placeholder="О себе"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="inputJob-error popup__input-error"></span>
              <button className="popup__save" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        {/* RENEW AVATAR POPUP */}
        <section className="popup popup_type_avatar">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form
              className="popup__form popup__avatar-form"
              name="avatar-form"
              novalidate>
              <input
                className="popup__input popup__input_type_avatar-link"
                type="url"
                name="avatar"
                id="inputAvatarLink"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="inputAvatarLink-error popup__input-error"></span>
              <button className="popup__save" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>

        {/* ADD POPUP */}
        <section className="popup popup_type_add">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form
              className="popup__form popup__add-form"
              name="add-form"
              novalidate>
              <input
                className="popup__input popup__input_type_place"
                type="text"
                name="name"
                id="inputPlace"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="inputPlace-error popup__input-error"></span>
              <input
                className="popup__input popup__input_type_place-link"
                type="url"
                name="link"
                id="inputPlaceLink"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="inputPlaceLink-error popup__input-error"></span>
              <button className="popup__save" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>

        {/* PREVIEW IMAGE POPUP */}
        <section className="popup popup_type_preview">
          <figure className="popup__preview-container">
            <button className="popup__close" type="button"></button>
            <img className="popup__preview-image" src="#" alt="" />
            <figcaption className="popup__preview-title"></figcaption>
          </figure>
        </section>

        {/* DELETE CARD POPUP */}
        <section className="popup popup_type_delete-card">
          <div className="popup__container popup__container_type_delete-card">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="delete-card" action="">
              <button
                className="popup__save popup__save_button_delete-card"
                type="submit">
                Да
              </button>
            </form>
          </div>
        </section>

        {/* TEMPLATE CARD */}
        <template id="card-template">
          <li className="card__item">
            <button className="card__trash"></button>
            <img className="card__image" src="#" alt="" />
            <div className="card__name">
              <h2 className="card__title overflow"></h2>
              <div>
                <button className="card__like-icon" type="button"></button>
                <div className="card__like-counter"></div>
              </div>
            </div>
          </li>
        </template>

        <Footer />
      </div>
    </div>
  );
}

export default App;
