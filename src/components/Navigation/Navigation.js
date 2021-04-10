import React, { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import imgAccount from '../../images/svg/icon-account.svg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Navigation(props) {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
    setOverlay(!overlay);
  }

  return (
    <Switch>
      {props.loggedIn === false ? (
        <Route exact path='/'>
          <ul className='nav nav_main'>
            <li className='nav__li nav__li_main link_hover'>
              <Link to='/signup' className='nav__link'>
                Регистрация
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  history.push('/signin');
                }}
                className='nav__button link_hover'>
                Войти
              </button>
            </li>
          </ul>
        </Route>
      ) : (
        <Route>
          <IconContext.Provider value={{ color: '#000' }}>
            <Link to='#' className={`nav__bar`}>
              <FaIcons.FaBars
                className='nav__bar-icon link_hover'
                onClick={showSidebar}
              />
            </Link>
            <div className={overlay ? 'overlay active' : 'overlay'}></div>
            <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
              <Link to='#' className='nav__bar ' onClick={showSidebar}>
                <AiIcons.AiOutlineClose className='nav__bar-icon nav__bar-icon_close link_hover' />
              </Link>
              <ul className='nav nav_menu'>
                <li className='nav__li nav__li_bar link_hover'>
                  <Link to='/' className='nav__link nav__link_color'>
                    Главная
                  </Link>
                </li>
                <li className='nav__li nav__li_bar-margin link_hover'>
                  <Link to='/movies' className='nav__link nav__link_color'>
                    Фильмы
                  </Link>
                </li>
                <li className='nav__li nav__li_bar-margin link_hover'>
                  <Link
                    to='/saved-movies'
                    className='nav__link nav__link_color'>
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => {
                  history.push('/profile');
                }}
                className='nav__button nav__button_movies link_hover'>
                <img
                  src={imgAccount}
                  alt='Иконка аккаунта'
                  className='nav__button-img'
                />
                Аккаунт
              </button>
            </nav>
          </IconContext.Provider>
        </Route>
      )}
    </Switch>
  );
}

export default Navigation;
