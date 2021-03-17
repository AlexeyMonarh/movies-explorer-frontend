import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../../images/svg/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(params) {
  return (
    <header className="header">
      <Switch>
        <Route exact path="/">
          <div className="header__main">
            <img src={logo} alt="Логотип" className="header__logo" />
            <Navigation />
          </div>
        </Route>
        <Route path="/movies">
          <div className="header__main header_background">
            <img src={logo} alt="Логотип" className="header__logo" />
            <Navigation />
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
