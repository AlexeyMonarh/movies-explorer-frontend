import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { items, itemsSave } from '../../../utils/api/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import iconLike from '../../../images/svg/icon-like.svg';
import iconDislike from '../../../images/svg/icon-dislike.svg';
import iconX from '../../../images/svg/icon-x.svg';

function MoviesCardList() {
  const [saveItems, setSaveItems] = useState(itemsSave);
  const [itemLike, setItemLike] = useState(iconDislike);
  const [addItems, setAddItems] = useState(false);
  const listItems = addItems ? items.length : 8;

//   { typeof window !== 'undefined' 
//   ? window.innerWidth <= 400 ? <SiteNavLogoMobile /> : <SiteNavLogo/> 
//   : null
// }

  function handleClick() {
    setAddItems(true);
  }

  function cardLike() {
    console.log('LIKE');
    setItemLike(iconLike);
  }
  function cardDelete(cardId) {
    const newList = saveItems.filter((c) => c.id !== cardId);
    return setSaveItems(newList);
  }

  return (
    <div className='movies-card-list'>
      <ul className='movies-card-list__ul'>
        <Switch>
          <Route exact path='/movies'>
            {items.slice(0, listItems).map((data, _id) => {
              return (
                <MoviesCard
                  key={_id}
                  id={data.id}
                  img={data.img}
                  description={data.description}
                  buttonClick={cardLike}
                  buttonImg={itemLike}
                />
              );
            })}
          </Route>
          <Route path='/saved-movies'>
            {saveItems.map((data, _id) => {
              return (
                <MoviesCard
                  key={_id}
                  id={data.id}
                  img={data.img}
                  description={data.description}
                  buttonClick={cardDelete}
                  buttonImg={iconX}
                  displayNone='movies-card__description-button_none'
                />
              );
            })}
          </Route>
        </Switch>
      </ul>
      <div className='movies-card-list__addItems'>
        <button
          className='movies-card-list__addItems-button'
          onClick={handleClick}>
          Ещё
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
