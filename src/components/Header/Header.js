import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className='header'>
      <div className={`header__main ${props.background}`}>
        <Link to='/'>
          <img src={logo} alt='Логотип' className='header__logo link_hover' />
        </Link>
        <Navigation loggedIn={props.loggedIn} />
      </div>
    </header>
  );
}

export default Header;
