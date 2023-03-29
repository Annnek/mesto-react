import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef(null); // создание рефа для инпута аватара, записываем объект, возвращаемый хуком, в переменную

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value, // получение значения инпута через реф
    });
    // if (avatarRef.current !== null) {
    //   onUpdateAvatar({
    //     avatar: avatarRef.current.value,
    //   });
    // }
  }

  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        required
        className="popup__input popup__input_type_avatar-link"
        type="url"
        name="avatar"
        id="inputAvatarLink"
        placeholder="Ссылка на картинку"
        onChange={handleChangeAvatar}
        ref={avatarRef} // передача рефа в инпут
      />
      <span className="inputAvatarLink-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
