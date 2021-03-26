import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/logo.svg';

function Login(params) {
  return (
    <div className='identification'>
      <Link to='/'>
        <img src={logo} alt='Логотип' />
      </Link>
      <form action='#' className='identification__form'>
        <div className='identification__form-items'>
          <h2 className='identification__form-item-heading'>Рады видеть!</h2>
          <div className='identification__form-item'>
            <input
              type='email'
              name='email'
              className='identification__form-item-input'
              required
              autoComplete='off'
            />
            <label className='identification__form-item-input-label'>Email</label>
          </div>
          <div className='identification__form-item'>
            <input
              type='password'
              name='password'
              className='identification__form-item-input'
              required
            />
            <label className='identification__form-item-input-label'>Пароль</label>
          </div>
        </div>
        <div className='identification__buttons'>
          <button type='submit' className='identification__button'>
            Войти
          </button>
          <span className='identification__span'>
            Ещё не зарегистрированы?
            <Link className='identification__link' to='/signup'>
              Регистрация
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
