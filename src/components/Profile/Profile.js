import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile(params) {
  return (
    <div className="profile">
      <Header background="header_background" />
      <div className="profile-block">
        <h2 className="profile-block__title">Привет, Виталий!</h2>
        <form className="profile-block__form">
          <div className="profile-block__form-items">
            <div className="profile-block__form-item">
              <input
                type="text"
                className="profile-block__form-input"
                dir="rtl"
                value="Виталий"
              />
              <label class="profile-block__form-item-input-label">Имя</label>
            </div>
            <div className="profile-block__form-item">
              <input
                type="text"
                className="profile-block__form-input"
                dir="rtl"
                value="pochta@yandex.ru"
              />
              <label class="profile-block__form-item-input-label">Почта</label>
            </div>
          </div>
          <div className="profile-block__form-buttons">
            <button className="profile-block__form-button">
              Редактировать
            </button>
            <Link className="profile-block__form-link" to="/">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
