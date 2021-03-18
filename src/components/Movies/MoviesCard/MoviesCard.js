import React from "react";

function MoviesCard(props) {
  return (
    <li className="movies-card">
      <img
        src={props.img}
        alt="Изображение дипломного проекта"
        className="movies-card__img"
      />
      <div className="movies-card__description">
        <h2 className="movies-card__description-title">{props.description}</h2>
        <button
          type="submit"
          className={`movies-card__description-button ${props.displayNone}`}
          onClick={props.buttonClick}>
          <img src={props.buttonImg} alt="Изображение кнопки" />
        </button>
      </div>
      <div className="movies-card__description-time">1ч 42м</div>
    </li>
  );
}

export default MoviesCard;
