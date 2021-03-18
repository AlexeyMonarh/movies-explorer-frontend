import React from "react";
import Header from "../Header/Header";

function Profile(params) {
  return (
    <div className="profile">
      <Header background="header_background" />
      <div className="profile-block">
        <h2 className="profile-block__title">Привет, Виталий!</h2>
        <form className="profile-block__form">
          <div className="profile-block__form-inputs">
            <input
              type="text"
              placeholder="Имя"
              className="profile-block__form-input"
            />
            <input
              type="text"
              className="profile-block__form-input"
              placeholder="Почта"
            />
          </div>
          <div className="profile-block__form-buttons">
            <button className="profile-block__form-button">
              Редактировать
            </button>
            <button className="profile-block__form-button">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
