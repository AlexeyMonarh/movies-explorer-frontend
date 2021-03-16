import React from "react";

function AboutProject(params) {
  return (
    <div className='aboutProject'>
      <h2 className='aboutProjectTitle'>О проекте</h2>
      <div className='aboutProjectBlock'>
        <div className='aboutProjectBlockStages'>
          <h3 className='aboutProjectBlockStagesTitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutProjectBlockStagesParagraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProjectBlockTime'>
          <h3 className='aboutProjectBlockStagesTitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutProjectBlockStagesParagraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProjectTimeLine'>
        <div className='aboutProjectTimeLineOneWeek'>1 неделя</div>
        <div className='aboutProjectTimeLineFourWeek'>4 недели</div>
      </div>
      <div className='aboutProjectTimeLineParagraph'>
        <p className='aboutProjectTimeLineParagraphBack'>Back-end</p>
        <p className='aboutProjectTimeLineParagraphFront'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
