import React from "react";
import "../index.css";
import defaultAvatar from "../images/avatarProfile.jpg";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] =
    React.useState("Путешественник");
  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);

  const [cards, setCards] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(false); отслеживаем загрузку карточек

  React.useEffect(() => {
    api
      .getUserProfile()
      .then((res) => {
        //мы вызываем функции-сеттеры (set...) с помощью новых значений, которые мы получаем из ответа API
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              src={userAvatar}
              alt="Аватар пользователя"
            />
          </button>
          <div className="profile__title-block">
            <h1 className="profile__title overflow">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}></button>
            <h2 className="profile__subtitle overflow">{userDescription}</h2>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="card">
          {cards.map((card) => (
            <Card key={card.id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
