import React, { useState, useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { items, itemsSave } from '../../../utils/api/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
// import iconDislike from '../../../images/svg/icon-dislike.svg';
import iconX from '../../../images/svg/icon-x.svg';

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
          count: state.initialCardsState.count + state.addCardResize.count,
        },
        addCardResize: {
          count: state.addCardResize.count,
        },
      });

    default:
      return state;
  }
}

function MoviesCardList(props) {
  let arrayCards = 12;
  const [addItems, setAddItems] = useState(false);
  const [blockButton, setBlockButton] = useState('movies-card-list__addItems');
  const [listMoviesAdd, dispatch] = useReducer(
    reducer,
    { initialCardsState: { count: arrayCards }, addCardResize: { count: 3 } },
    addCards
  );

  console.log(listMoviesAdd.initialCardsState.count);
  // console.log(props.movies.length);

  const listMoviesMin = addItems
    ? listMoviesAdd.initialCardsState.count
    : listMoviesAdd.initialCardsState.count;
  const itemsList = props.screen ? listMoviesMin : listMoviesMin;

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      if (props.screen > 769) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { count: 12 },
            addCardResize: { count: 3 },
          },
        });
      }
      if (props.screen < 769) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { count: 8 },
            addCardResize: { count: 2 },
          },
        });
      }
      if (props.screen < 480) {
        dispatch({
          type: 'resize',
          payload: {
            initialCardsState: { count: 5 },
            addCardResize: { count: 1 },
          },
        });
      }
    }
    return () => {
      isMounted = true;
    };
  }, [props.screen, dispatch]);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setBlockButton('movies-card-list__addItems_none');
    }
    if (listMoviesAdd.initialCardsState.count == props.movies.length) {
      setBlockButton('movies-card-list__addItems_none');
    }
  });

  function handleAddCards() {
    setAddItems(true);
    dispatch({ type: 'addCards' });
    if (listMoviesAdd.initialCardsState.count + 1 === props.movies.length) {
      setBlockButton('movies-card-list__addItems_none');
    }
  }

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
          <Route path='/saved-movies'>
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
          </Route>
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
