import React from "react";
import fotoStudent from "../../../images/foto-student.png";

function AboutMe(params) {
  return (
    <div className='aboutMe'>
      <h2 className='aboutMeTitle'>Студент</h2>
      <div className='aboutMeBlock'>
        <div className='aboutMeData'>
          <h2 className='aboutMeDataName'>Алексей</h2>
          <h3 className='aboutMeDataAbout'>Фронтенд-разработчик, 33 года</h3>
          <p className='aboutMeDataParagraph'>
            Родился в городе Хабаровск, закончил факультет экономики АмГУ. Я
            люблю спорт в любом его проявлении, а ещё я заядлый киноман. Недавно
            начал кодить. С марта 2020 года прохожу обучение в
            Яндекс.Практикуме. После окончания курса по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы. Планирую
            стать асом Веб-разработки. Сейчас осваиваю Angular.
          </p>
        </div>
        <img src={fotoStudent} alt='Фото' className='aboutMeBlockImg' />
      </div>
      <div className='aboutMeContacts'>
        <a
          href='https://www.instagram.com/monarh_web/'
          className='aboutMeContactsItems'>
          Instagram
        </a>
        <a
          href='https://github.com/AlexeyMonarh'
          className='aboutMeContactsItems'>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
