import React from 'react';
import fotoStudent from '../../../images/foto-student.png';

function AboutMe() {
  return (
    <div className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__block'>
        <div className='about-me__data'>
          <h2 className='about-me__data-name'>Алексей</h2>
          <h3 className='about-me__data-about'>
            Фронтенд-разработчик, 33 года
          </h3>
          <p className='about-me__data-paragraph'>
            Родился в городе Хабаровск, закончил факультет экономики АмГУ. Я
            люблю спорт в любом его проявлении, а ещё я заядлый киноман. Недавно
            начал кодить. С марта 2020 года прохожу обучение в
            Яндекс.Практикуме. После окончания курса по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы. Планирую
            стать асом Веб-разработки. Сейчас осваиваю Angular.
          </p>
        </div>
        <img src={fotoStudent} alt='Фото' className='about-me__block-img' />
      </div>
      <div className='about-me__contacts'>
        <a
          href='https://www.instagram.com/monarh_web/'
          className='about-me__contacts-item'>
          Instagram
        </a>
        <a
          href='https://github.com/AlexeyMonarh'
          className='about-me__contacts-item'>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
