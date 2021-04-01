import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { items, itemsSave } from '../../../utils/api/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
// import iconLike from '../../../images/svg/icon-like.svg';
// import iconDislike from '../../../images/svg/icon-dislike.svg';
import iconX from '../../../images/svg/icon-x.svg';

function MoviesCardList(props) {
  // const [saveItems, setSaveItems] = useState(itemsSave);
  // const [itemLike, setItemLike] = useState(iconDislike);
  const [addItems, setAddItems] = useState(false);
  const [blockButton, setBlockButton] = useState('movies-card-list__addItems');
  const [screen, setScreen] = useState(window.innerWidth);
  const listItems = props.movies.length;
  // console.log(props.movies)
  const listItemsMin = addItems ? props.movies.length : 8;
  const itemsList = screen >= 769 ? listItems : listItemsMin;

  function getWindowDimensions() {
    setScreen(window.innerWidth);
  }
  window.addEventListener('resize', getWindowDimensions);

  // useEffect(() => {
  //   let isMounted = true;
  //   simulateSlowNetworkRequest().then(() => {
  //     if (!isMounted) {
  //     }
  //   });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setBlockButton('movies-card-list__addItems_none');
    }
  });

  function handleClick() {
    setAddItems(true);
    if (props.movies.length) {
      setBlockButton('movies-card-list__addItems_none');
    }
  }

  // function cardLike() {
  //   console.log('LIKE');
  //   setItemLike(iconLike);
  // }
  // function cardDelete(cardId) {
  //   const newList = saveItems.filter((c) => c.id !== cardId);
  //   return setSaveItems(newList);
  // }

  return (
    <div className='movies-card-list'>
      <ul className='movies-card-list__ul'>
        <Switch>
          <Route path='/movies'>
            {props.movies.slice(0, itemsList).map((data, id) => {
              // console.log(data)
              const imgNull = data.image
                ? `https://api.nomoreparties.co${data.image.url}`
                : console.log('Невалидный адрес картинки');
              return (
                <MoviesCard
                  key={id}
                  id={data.id}
                  img={imgNull}
                  description={data.nameRU}
                  duration={data.duration}
                  buttonClick={props.cardLike}
                  buttonImg={props.itemLike}
                />
              );
            })}
          </Route>
          <Route exact path='/saved-movies'>
            {props.movies.map((data, id) => {
              return (
                <MoviesCard
                  key={id}
                  id={data.id}
                  img={data.img}
                  description={data.description}
                  buttonClick={props.cardDelete}
                  buttonImg={iconX}
                  displayNone='movies-card__description-button_none'
                />
              );
            })}
          </Route>
        </Switch>
      </ul>
      <div className={blockButton}>
        <button
          className={`movies-card-list__addItems-button link_hover`}
          onClick={handleClick}>
          Ещё
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
