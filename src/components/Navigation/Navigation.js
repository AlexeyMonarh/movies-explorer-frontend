import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import imgAccount from '../../images/svg/icon-account.svg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <Switch>
      <Route exact path='/'>
        <ul className='nav'>
          <li className='nav__li'>
            <Link to='/signup' className='nav__link'>
              Регистрация
            </Link>
          </li>
          <li>
            <Link to='/signin' className='nav__link'>
              <button className='nav__button'>Войти</button>
            </Link>
          </li>
        </ul>
      </Route>
      <Route>
        <IconContext.Provider value={{ color: '#000' }}>
          <Link to='#' className={`nav__bar`}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
            <ul className='nav nav_menu' onClick={showSidebar}>
              <li className='nav__li'>
                <Link to='#' className='nav__bar'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <li className='nav__li'>
                <Link to='/movies' className='nav__link nav__link_color'>
                  Фильмы
                </Link>
              </li>
              <li className='nav__li'>
                <Link to='/saved-movies' className='nav__link nav__link_color'>
                  Сохранённые фильмы
                </Link>
              </li>
              <Link to='/profile' className='nav__button-link'>
                <button className='nav__button nav__button_movies'>
                  <img
                    src={imgAccount}
                    alt='Иконка аккаунта'
                    className='nav__button-img'
                  />
                  Аккаунт
                </button>
              </Link>
            </ul>
          </nav>
        </IconContext.Provider>
      </Route>
    </Switch>
  );
}

export default Navigation;
