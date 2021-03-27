import React from 'react';
import landingLogo from '../../../images/svg/landing-logo.svg';

function Promo() {
  return (
    <div className='promo'>
      <img
        src={landingLogo}
        alt='Логотип Яндекс.Практикума'
        className='promo__logo'
      />
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки
      </h1>
      <div className='promo__footer'>
        <ul className='promo__footer-nav'>
          <li className='promo__footer-nav-li'>
            <a href='#aboutProject' className='promo__footer-nav-link'>
              О проекте
            </a>
          </li>
          <li className='promo__footer-nav-li'>
            <a href='#techs' className='promo__footer-nav-link'>
              Технологии
            </a>
          </li>
          <li className='promo__footer-nav-li'>
            <a href='#about-me' className='promo__footer-nav-link'>
              Студент
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Promo;
