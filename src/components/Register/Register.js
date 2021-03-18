import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/svg/logo.svg";

function Register(params) {
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <form action="#" className="popup__inputs register__form ">
        <h2 className="popup__heading">Добро пожаловать!</h2>
        <input
          type="text"
          name="name"
          className="popup__input register__input"
          placeholder="Имя"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          className="popup__input register__input"
          placeholder="Email"
          required
          autoComplete="off"
        />
        {/* <span className="popup__error" id="name-error"></span> */}
        <input
          type="password"
          name="password"
          className="popup__input register__input"
          placeholder="Пароль"
          required
        />
        {/* <span className="popup__error" id="link-error"></span> */}
        <button type="submit" className="popup__submit-button register__button">
          Зарегистрироваться
        </button>
        <span className="register__span">
          Уже зарегистрированы?
          <Link className="header__auth" to="/signin">
            Войти
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
