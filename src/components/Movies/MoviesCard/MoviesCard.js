import React from 'react';

function MoviesCard(props) {
  function compareId() {
    if (location.pathname === '/movies') {
      const compareId = props.itemLike().some((res) => res === props.data.id);
      return compareId;
    }
  }
  const initLike = ` ${
    compareId()
      ? 'movies-card__description-button_like'
      : 'movies-card__description-button_dislike'
  }`;

  function cardSave() {
    props.buttonLikeClick(props.data);
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
      <a href={`${props.data.trailerLink}`} target='_blank'>
        <img
          src={props.img}
          alt='Изображение дипломного проекта'
          className='movies-card__img'
        />
      </a>
      <div className='movies-card__description'>
        <h2 className='movies-card__description-title'>{props.description}</h2>
        <button
          type='submit'
          className={`movies-card__description-button link_hover ${props.displayNone}${initLike}`}
          onClick={cardSave}></button>
      </div>
      <div className='movies-card__description-time'>
        {getTimeFromMins(props.duration)}
      </div>
    </li>
  );
}

export default MoviesCard;
