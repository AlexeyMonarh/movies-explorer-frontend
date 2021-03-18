import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/svg/logo.svg";

function Login(params) {
  return (
    <div className="login">
      <div className="register">
        <Link to="/">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>
        <form action="#" className="popup__inputs register__form ">
          <h2 className="popup__heading">Рады видеть!</h2>
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
          <button
            type="submit"
            className="popup__submit-button register__button"
          >
            Войти
          </button>
          <span className="register__span">
            Ещё не зарегистрированы?
            <Link className="header__auth" to="/signup">
              Регистрация
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
