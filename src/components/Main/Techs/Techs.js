import React from "react";

function Techs(params) {
  return (
    <div className='techs'>
      <h2 className='techsTitle'>Технологии</h2>
      <div className='techsBlock'>
        <h3 className='techsBlockTitle'>7 технологий</h3>
        <p className='techsBlockParagraph'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className='techsBlockItems'>
          <div className='techsBlockItem'>
            <p>HTML</p>
          </div>
          <div className='techsBlockItem'>
            <p>CSS</p>
          </div>
          <div className='techsBlockItem'>
            <p>JS</p>
          </div>
          <div className='techsBlockItem'>
            <p>React</p>
          </div>
          <div className='techsBlockItem'>
            <p>Git</p>
          </div>
          <div className='techsBlockItem'>
            <p>Express.js</p>
          </div>
          <div className='techsBlockItem'>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
