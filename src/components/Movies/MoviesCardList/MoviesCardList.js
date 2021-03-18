import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import iconLike from "../../../images/svg/icon-like.svg";
import iconDislike from "../../../images/svg/icon-dislike.svg";
import iconX from "../../../images/svg/icon-x.svg";
import slova from "../../../images/imagecompressor/33slova-min.png";
import stoLet from "../../../images/imagecompressor/100let-min.png";
import vPogone from "../../../images/imagecompressor/v-pogone-min.png";
import baskiay from "../../../images/imagecompressor/baskiay-min.png";
import beg from "../../../images/imagecompressor/beg-min.png";
import knigo from "../../../images/imagecompressor/knigo-min.png";
import dymauOGermany from "../../../images/imagecompressor/dymau-o-germany-min.png";
import gimDanger from "../../../images/imagecompressor/gim-danger-min.png";
import djenis from "../../../images/imagecompressor/djenis-min.png";
import soberis from "../../../images/imagecompressor/soberis-min.png";
import piJHarvi from "../../../images/imagecompressor/pi-j-harvi-min.png";
import poVolnam from "../../../images/imagecompressor/po-volnam-min.png";
import roodboy from "../../../images/imagecompressor/roodboy-min.png";
import skate from "../../../images/imagecompressor/skate-min.png";
import voina from "../../../images/imagecompressor/voina-min.png";
import zona from "../../../images/imagecompressor/zona-min.png";

function MoviesCardList() {
  function cardLike() {
    console.log("LIKE");
  }

  function cardDelete() {
    console.log("DELETE");
  }

  return (
    <ul className="movies-card-list">
      <Switch>
        <Route exact path="/movies">
          <MoviesCard
            img={slova}
            description="33 слова о дизайне"
            buttonClick={cardLike}
            buttonImg={iconLike}
          />
          <MoviesCard
            img={stoLet}
            description="Киноальманах «100 лет дизайна»"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={vPogone}
            description="В погоне за Бенкси"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={baskiay}
            description="Баския: Взрыв реальности"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={beg}
            description="Бег это свобода"
            buttonClick={cardLike}
            buttonImg={iconLike}
          />
          <MoviesCard
            img={knigo}
            description="Книготорговцы"
            buttonClick={cardLike}
            buttonImg={iconLike}
          />
          <MoviesCard
            img={dymauOGermany}
            description="Когда я думаю о Германии ночью"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={gimDanger}
            description="Gimme Danger: История Игги и The Stooges"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={djenis}
            description="Дженис: Маленькая девочка грустит"
            buttonClick={cardLike}
            buttonImg={iconLike}
          />
          <MoviesCard
            img={soberis}
            description="Соберись перед прыжком"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={piJHarvi}
            description="Пи Джей Харви: A dog called money"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={poVolnam}
            description="По волнам: Искусство звука в кино"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={roodboy}
            description="Рудбой"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={skate}
            description="Скейт — кухня"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={voina}
            description="Война искусств"
            buttonClick={cardLike}
            buttonImg={iconDislike}
          />
          <MoviesCard
            img={zona}
            description="Зона"
            buttonClick={cardLike}
            buttonImg={iconLike}
          />
        </Route>
        <Route path="/saved-movies">
          <MoviesCard
            img={slova}
            description="33 слова о дизайне"
            buttonClick={cardDelete}
            buttonImg={iconX}
            displayNone="movies-card__description-button_none"
          />
          <MoviesCard
            img={stoLet}
            description="Киноальманах «100 лет дизайна»"
            buttonClick={cardDelete}
            buttonImg={iconX}
            displayNone="movies-card__description-button_none"
          />
          <MoviesCard
            img={vPogone}
            description="В погоне за Бенкси"
            buttonClick={cardDelete}
            buttonImg={iconX}
            displayNone="movies-card__description-button_none"
          />
        </Route>
      </Switch>
    </ul>
  );
}

export default MoviesCardList;
