import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/svg/logo.svg";

function Register(params) {
  return (
    <div className="identification">
      <Link to="/">
        <img src={logo} alt="Логотип" />
      </Link>
      <form action="#" className="identification__form">
        <h2 className="identification__form-heading">Добро пожаловать!</h2>
        <input
          type="text"
          name="name"
          className="identification__input"
          placeholder="Имя"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          className="identification__input"
          placeholder="Email"
          required
          autoComplete="off"
        />
        {/* <span className="popup__error" id="name-error"></span> */}
        <input
          type="password"
          name="password"
          className="identification__input"
          placeholder="Пароль"
          required
        />
        {/* <span className="popup__error" id="link-error"></span> */}
        <button
          type="submit"
          className="identification__button"
        >
          Зарегистрироваться
        </button>
        <span className="identification__span">
          Уже зарегистрированы?
          <Link className="identification__link" to="/signin">
            Войти
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
