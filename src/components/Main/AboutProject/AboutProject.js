import React from 'react';

function AboutProject() {
  return (
    <div className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__block'>
        <div className='about-project__block-stages'>
          <h3 className='about-project__block-stages-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__block-stages-paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__block-time'>
          <h3 className='about-project__block-stages-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__block-stages-paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__time-line'>
        <div className='about-project__time-line-one-week'>1 неделя</div>
        <div className='about-project__time-line-four-week'>4 недели</div>
      </div>
      <div className='about-project__time-line-paragraph'>
        <p className='about-project__time-line-paragraph-back'>Back-end</p>
        <p className='about-project__time-line-paragraph-front'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
