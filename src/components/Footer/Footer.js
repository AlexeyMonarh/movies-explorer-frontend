import React from "react";

function Footer(params) {
  return (
    <div className='footer'>
      <h2 className='footerTitle'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footerBlock'>
        <p>&copy;2020</p>
        <ul className='footerBlockItems'>
          <li className='footerBlockItem'>
            <a
              href='https://praktikum.yandex.ru/'
              className='aboutMeContactsItems'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footerBlockItem'>
            <a
              href='https://www.instagram.com/monarh_web/'
              className='aboutMeContactsItems'>
              Instagram
            </a>
          </li>
          <li className='footerBlockItem'>
            <a
              href='https://github.com/AlexeyMonarh'
              className='aboutMeContactsItems'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
