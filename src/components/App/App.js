import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Fuse from 'fuse.js';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorPage from '../404/ErrorPage';
// import MainApi from '../../utils/api/MainApi';
import MoviesApi from '../../utils/api/MoviesApi';
import iconLike from '../../images/svg/icon-like.svg';
import iconDislike from '../../images/svg/icon-dislike.svg';

function App() {
  const [screen, setScreen] = useState(window.innerWidth);
  const [movies, setMovies] = useState([]);
  const [saveItems, setSaveItems] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [itemLike, setItemLike] = useState(iconDislike);
  const [requestFailed, setRequestFailed] = useState(false);
  // console.log(movies);

  const onSearch = (text) => {
    setPreloader(true);
    if (text) {
      setRequestFailed(false);
      setNotFound(false);
      MoviesApi.getInitialMovies()
        .then((arr) => {
          const fuse = new Fuse(arr, {
            keys: ['nameRU'],
            includeScore: 0,
            includeMatches: true,
            findAllMatches: true,
            threshold: 0.1,
            location: 0,
          });
          const results = fuse.search(text.search);
          const resultsArray = results.map((result) => result.item);
          setPreloader(false);
          if (resultsArray.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
          return setMovies(resultsArray);
        })
        .catch((err) => {
          if (err) {
            setRequestFailed(true);
          }
        });
    }
  };

  function cardLike() {
    console.log('LIKE');
    setItemLike(iconLike);
  }
  function cardDelete(cardId) {
    const newList = saveItems.filter((c) => c.id !== cardId);
    return setSaveItems(newList);
  }

  // useEffect(() => {
  //   // if (loggedIn) {
  //   //   history.push("/");
  //   //   api
  //   //     .getUser()
  //   //     .then((res) => {
  //   //       setСurrentUser(res.data);
  //   //     })
  //   //     .catch(err);

  //   MoviesApi.getInitialCards()
  //     .then((res) => {
  //       setMovies(res);
  //     })
  //     .catch();
  //   // }
  // }, []);

  function getWindowDimensions() {
    setScreen(window.innerWidth);
  }
  window.addEventListener('resize', getWindowDimensions);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });
  const escFunction = (event) => {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  };

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies
            initPreloader={preloader}
            notFound={notFound}
            requestFailed={requestFailed}
            screen={screen}
            cardLike={cardLike}
            itemLike={itemLike}
            movies={movies}
            saveItems={saveItems}
            onSearch={onSearch}
            cardDelete={cardDelete}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies
            screen={screen}
            saveItems={saveItems}
            cardDelete={cardDelete}
          />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/errors'>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
