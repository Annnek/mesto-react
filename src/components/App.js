import React from "react";
import "../index.css";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  //три переменные состояния и три функции, которые будут менять их значения
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />

        {/* PREVIEW IMAGE POPUP */}
        <ImagePopup></ImagePopup>

        {/* POPUP EDIT PROFILE */}
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}>
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            id="inputName"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="inputName-error popup__input-error"></span>
          <input
            className="popup__input popup__input_type_job"
            type="text"
            name="about"
            id="inputJob"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="inputJob-error popup__input-error"></span>
        </PopupWithForm>

        {/* RENEW AVATAR POPUP */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}>
          <input
            className="popup__input popup__input_type_avatar-link"
            type="url"
            name="avatar"
            id="inputAvatarLink"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="inputAvatarLink-error popup__input-error"></span>
        </PopupWithForm>

        {/* ADD POPUP */}
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Сохранить"
          isOpen={isAddPlacePopupOpen}>
          <input
            className="popup__input popup__input_type_place"
            type="text"
            name="name"
            id="inputPlace"
            placeholder="Название"
            minLength="2"
            maxLength="30"
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
        </PopupWithForm>

        {/* DELETE CARD POPUP */}
        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          buttonText="Да"></PopupWithForm>

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
