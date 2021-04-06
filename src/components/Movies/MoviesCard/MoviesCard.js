import React from 'react';

function MoviesCard(props) {

  function cardSave (){
    props.buttonLikeClick(props.data)
  }

  function cardDelete() {
    props.buttonLikeClick(props.id);
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins >= 60) {
      return hours + 'ч ' + minutes + 'м';
    } else {
      return minutes + 'м';
    }
  }

  return (
    <li className='movies-card'>
      <img
        src={props.img}
        alt='Изображение дипломного проекта'
        className='movies-card__img'
      />
      <div className='movies-card__description'>
        <h2 className='movies-card__description-title'>{props.description}</h2>
        <button
          type='submit'
          className={`movies-card__description-button link_hover ${props.displayNone}`}
          onClick={cardSave}>
          <img src={props.buttonImg} alt='Изображение кнопки' />
        </button>
      </div>
      <div className='movies-card__description-time'>
        {getTimeFromMins(props.duration)}
      </div>
    </li>
  );
}

export default MoviesCard;
