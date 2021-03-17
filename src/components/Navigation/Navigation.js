import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import imgAccount from "../../images/svg/icon-account.svg";

function Navigation(props) {
  return (
    <Switch>
      <Route exact path="/">
        <ul className="nav">
          <li className="nav__li">
            <a href="#" className="nav__link">
              Регистрация
            </a>
          </li>
          <li>
            <button className="nav__button">Войти</button>
          </li>
        </ul>
      </Route>
      <Route exact path="/movies">
        <ul className="nav">
          <li className="nav__li">
            <a href="#" className="nav__link nav__link_color">
              Фильмы
            </a>
          </li>
          <li className="nav__li">
            <a href="/saved-movies" className="nav__link nav__link_color">
              Сохранённые фильмы
            </a>
          </li>
        </ul>

        <button className="nav__button nav__button_movies">
          <Link to="/profile" className="nav__button-link">
            <img
              src={imgAccount}
              alt="Иконка аккаунта"
              className="nav__button-img"
            />
            Аккаунт
          </Link>
        </button>
      </Route>
    </Switch>
  );
}

export default Navigation;
