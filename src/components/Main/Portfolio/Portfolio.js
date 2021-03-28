import React from 'react';

function Portfolio() {
  return (
    <div className='portfolio'>
      <ul className='portfolio__items'>
        Портфолио
        <li className='portfolio__item'>
          <a href='https://alexeymonarh.github.io/how-to-learn/' className='portfolio__item-link'>
            <p className='portfolio__item-paragraph'>Статичный сайт</p> ↗
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://alexeymonarh.github.io/russian-travel/' className='portfolio__item-link'>
            <p className='portfolio__item-paragraph'>Адаптивный сайт</p> ↗
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://monarhmesto.students.nomoreparties.space/' className='portfolio__item-link'>
            <p className='portfolio__item-paragraph'>Одностраничное приложение</p> ↗
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
