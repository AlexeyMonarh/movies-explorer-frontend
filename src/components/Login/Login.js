import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/svg/logo.svg";

function Login(params) {
  return (
      <div className="identification">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
        <form action="#" className="identification__form">
          <h2 className="identification__form-heading">Рады видеть!</h2>
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
            Войти
          </button>
          <span className="identification__span">
            Ещё не зарегистрированы?
            <Link className="identification__link" to="/signup">
              Регистрация
            </Link>
          </span>
        </form>
      </div>
  );
}

export default Login;
