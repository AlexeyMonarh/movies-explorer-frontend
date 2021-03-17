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
        <h2 className="movies-card__description__title">{props.description}</h2>
        <div className="movies-card__description__like-box">
          <button
            type="submit"
            className="movies-card__description__like-box-button"
          ></button>
        </div>
      </div>
      <div className="movies-card__description-time">1ч 42м</div>
    </li>
  );
}

export default MoviesCard;
