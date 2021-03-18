import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import imgAccount from "../../images/svg/icon-account.svg";

function Navigation(props) {
  return (
    <Switch>
      <Route exact path="/">
        <ul className="nav">
          <li className="nav__li">
            <Link to="/signup" className="nav__link">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/signin" className="nav__link">
              <button className="nav__button">Войти</button>
            </Link>
          </li>
        </ul>
      </Route>
      <Route>
        <ul className="nav">
          <li className="nav__li">
            <Link to="/movies" className="nav__link nav__link_color">
              Фильмы
            </Link>
          </li>
          <li className="nav__li">
            <Link to="/saved-movies" className="nav__link nav__link_color">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="nav__button-link">
          <button className="nav__button nav__button_movies">
            <img
              src={imgAccount}
              alt="Иконка аккаунта"
              className="nav__button-img"
            />
            Аккаунт
          </button>
        </Link>
      </Route>
    </Switch>
  );
}

export default Navigation;
