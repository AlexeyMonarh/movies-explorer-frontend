import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__block'>
        <p className='footer__block-date'>&copy;2020</p>
        <ul className='footer__block-items'>
          <li className='footer__block-item'>
            <a
              href='https://praktikum.yandex.ru/'
              className='about-me__contacts-item footer__block-item_link'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__block-item'>
            <a
              href='https://github.com/AlexeyMonarh'
              className='about-me__contacts-item footer__block-item_link'>
              GitHub
            </a>
          </li>
          <li className='footer__block-item'>
            <a
              href='https://www.instagram.com/monarh_web/'
              className='about-me__contacts-item footer__block-item_link'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
