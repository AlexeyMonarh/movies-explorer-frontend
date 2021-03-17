import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import slova from "../../../images/imagecompressor/33slova-min.png";

function MoviesCardList(params) {
  return (
    <ul className="movies-card-list">
      <MoviesCard img={slova} description="33 слова о дизайне" />
      <MoviesCard img={slova} description="Киноальманах «100 лет дизайна»" />
      <MoviesCard img={slova} description="В погоне за Бенкси" />
      <MoviesCard img={slova} description="Баския: Взрыв реальности" />
      <MoviesCard img={slova} description="Бег это свобода" />
      <MoviesCard img={slova} description="Книготорговцы" />
      <MoviesCard img={slova} description="Когда я думаю о Германии ночью" />
      <MoviesCard
        img={slova}
        description="Gimme Danger: История Игги и The Stooges"
      />
      <MoviesCard img={slova} description="Дженис: Маленькая девочка грустит" />
      <MoviesCard img={slova} description="Соберись перед прыжком" />
      <MoviesCard img={slova} description="Пи Джей Харви: A dog called money" />
      <MoviesCard img={slova} description="По волнам: Искусство звука в кино" />
      <MoviesCard img={slova} description="Рудбой" />
      <MoviesCard img={slova} description="Скейт — кухня" />
      <MoviesCard img={slova} description="Война искусств" />
      <MoviesCard img={slova} description="Зона" />
    </ul>
  );
}

export default MoviesCardList;
