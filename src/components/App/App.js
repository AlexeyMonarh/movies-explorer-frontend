import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
  const [movies, setMovies] = useState([]);
  const [saveItems, setSaveItems] = useState(MoviesApi);
  const [itemLike, setItemLike] = useState(iconDislike);
  function cardLike() {
    console.log('LIKE');
    setItemLike(iconLike);
  }
  function cardDelete(cardId) {
    const newList = saveItems.filter((c) => c.id !== cardId);
    return setSaveItems(newList);
  }

  useEffect(() => {
    // if (loggedIn) {
    //   history.push("/");
    //   api
    //     .getUser()
    //     .then((res) => {
    //       setСurrentUser(res.data);
    //     })
    //     .catch(err);
    MoviesApi.getInitialCards()
      .then((res) => {
        setMovies(res);
      })
      .catch();
    // }
  }, []);

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
            cardLike={cardLike}
            itemLike={itemLike}
            movies={movies}
            cardDelete={cardDelete}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
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
