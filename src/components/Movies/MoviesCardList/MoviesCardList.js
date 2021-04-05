import React, { useState, useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { items, itemsSave } from '../../../utils/api/movies';
// import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
// import iconDislike from '../../../images/svg/icon-dislike.svg';
// import iconX from '../../../images/svg/icon-x.svg';

function MoviesCardList(props) {
  const [addItems, setAddItems] = useState(false);
  const [blockButton, setBlockButton] = useState('movies-card-list__addItems');
  let arrayCards = 12;
  const [listMoviesAdd, dispatch] = useReducer(
    reducer,
    {
      initialCardsState: { arrayCardsList: arrayCards },
      addCardResize: { arrayCardsList: 3 },
    },
    addCards
  );

  function addCards(state) {
    // console.log(state);
    return { ...state };
  }

  function reducer(state, action) {
    // console.log(action);
    switch (action.type) {
      case 'resize':
        return addCards(action.payload);

      case 'addCards':
        return addCards({
          initialCardsState: {
            arrayCardsList:
              state.initialCardsState.arrayCardsList +
              state.addCardResize.arrayCardsList,
          },
          addCardResize: {
            arrayCardsList: state.addCardResize.arrayCardsList,
          },
        });

      default:
        return state;
    }
  }

  // console.log(listMoviesAdd.initialCardsState.arrayCardsList);
  // console.log(props.movies.length);

  const listMoviesMin = addItems
    ? listMoviesAdd.initialCardsState.arrayCardsList
    : listMoviesAdd.initialCardsState.arrayCardsList;
  const itemsList = props.screen ? listMoviesMin : listMoviesMin;

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      if (props.screen > 1280) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { arrayCardsList: 12 },
            addCardResize: { arrayCardsList: 4 },
          },
        });
      }
      if (props.screen < 1281) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { arrayCardsList: 12 },
            addCardResize: { arrayCardsList: 3 },
          },
        });
      }
      if (props.screen < 929) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { arrayCardsList: 8 },
            addCardResize: { arrayCardsList: 2 },
          },
        });
      }
      if (props.screen < 633) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { arrayCardsList: 5 },
            addCardResize: { arrayCardsList: 1 },
          },
        });
      }
    }
    return () => {
      isMounted = true;
    };
  }, [props.screen, dispatch]);

  useEffect(() => {
    if (
      props.movies.length == 0 ||
      props.movies.length < 3 ||
      listMoviesAdd.initialCardsState.arrayCardsList >= props.movies.length ||
      location.pathname === '/saved-movies'
    ) {
      setBlockButton('movies-card-list__addItems_none');
    } else {
      setBlockButton('movies-card-list__addItems');
    }
  });

  function handleAddCards() {
    setAddItems(true);
    dispatch({ type: 'addCards' });
  }

  // function cardDelete(cardId) {
  //   const newList = saveItems.filter((c) => c.id !== cardId);
  //   return setSaveItems(newList);
  // }

  return (
    <div className='movies-card-list'>
      {/* <Preloader /> */}
      <ul className='movies-card-list__ul'>
        <Switch>
          <Route path='/movies'>
            {props.movies.slice(0, itemsList).map((data, id) => {
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
          {/* <Route path='/saved-movies'>
            {props.movies.map((data, id) => {
              // const imgNull =
              // data.image
              //   ? `https://api.nomoreparties.co${data.image.url}`
              //   : console.log('Невалидный адрес картинки');
              return (
                <MoviesCard
                  key={id}
                  id={data.id}
                  // img={data.image.url}
                  description={data.nameRU}
                  duration={data.duration}
                  buttonClick={props.cardDelete}
                  buttonImg={iconX}
                  displayNone='movies-card__description-button_none'
                />
              );
            })}
          </Route> */}
        </Switch>
      </ul>
      <div className={blockButton}>
        <button
          className={`movies-card-list__addItems-button link_hover`}
          onClick={handleAddCards}>
          Ещё
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
