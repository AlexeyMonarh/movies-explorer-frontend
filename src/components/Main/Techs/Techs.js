import React from 'react';

function Techs() {
  return (
    <div className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__block'>
        <h3 className='techs__block-title'>7 технологий</h3>
        <p className='techs__block-paragraph'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className='techs__items'>
        <div className='techs__item'>
          <p>HTML</p>
        </div>
        <div className='techs__item'>
          <p>CSS</p>
        </div>
        <div className='techs__item'>
          <p>JS</p>
        </div>
        <div className='techs__item'>
          <p>React</p>
        </div>
        <div className='techs__item'>
          <p>Git</p>
        </div>
        <div className='techs__item'>
          <p>Express.js</p>
        </div>
        <div className='techs__item'>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Techs;
