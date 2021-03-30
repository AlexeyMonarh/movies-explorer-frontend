import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/svg/404.svg';

function ErrorPage() {
  return (
    <div className='errorPage'>
      <img src={errorImg} alt='Ошибка 404' className='errorPage__img' />
      <p className='errorPage__paragraph'>Страница не найдена</p>
      <Link to='/' className='errorPage__link link_hover'>
        Назад
      </Link>
    </div>
  );
}

export default ErrorPage;
