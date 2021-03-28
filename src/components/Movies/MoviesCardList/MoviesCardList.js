import React from 'react';
import { Route, Switch } from 'react-router-dom';
import items from '../../../utils/api/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import iconLike from '../../../images/svg/icon-like.svg';
// import iconDislike from '../../../images/svg/icon-dislike.svg';
// import iconX from '../../../images/svg/icon-x.svg';

function MoviesCardList() {
  // const [addItems, setAddItems] = useState(false);
  // const listItems = addItems ? list.length : 8

  // function handleClick() {
  //   setAddItems(true);
  // }

  function cardLike() {
    console.log('LIKE');
  }
  // function cardDelete() {
  //   console.log('DELETE');
  // }

  return (
    <ul className='movies-card-list'>
      <Switch>
        <Route exact path='/movies'>
          {items.map((data, _id) => {
            return (
              <MoviesCard
                key={_id}
                img={data.img}
                description={data.description}
                buttonClick={cardLike}
                buttonImg={iconLike}
              />
            );
          })}
        </Route>
        <Route path='/saved-movies'>
          {/* <MoviesCard
            img={slova}
            description='33 слова о дизайне'
            buttonClick={cardDelete}
            buttonImg={iconX}
            displayNone='movies-card__description-button_none'
          />
          <MoviesCard
            img={stoLet}
            description='Киноальманах «100 лет дизайна»'
            buttonClick={cardDelete}
            buttonImg={iconX}
            displayNone='movies-card__description-button_none'
          />
          <MoviesCard
            img={vPogone}
            description='В погоне за Бенкси'
            buttonClick={cardDelete}
            buttonImg={iconX}
            displayNone='movies-card__description-button_none'
          /> */}
        </Route>
      </Switch>
      {/* <button onClick={handleClick()}>Ещё</button> */}
    </ul>
  );
}

export default MoviesCardList;
