import React, { useEffect, useRef, useState } from 'react';
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Fuse from 'fuse.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorPage from '../404/ErrorPage';
import MainApi from '../../utils/api/MainApi';
import MoviesApi from '../../utils/api/MoviesApi';
import succed from '../../images/svg/succed.svg';
import fail from '../../images/svg/fail.svg';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/authorization';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setСurrentUser] = useState('');
  const history = useHistory();
  const [screen, setScreen] = useState(window.innerWidth);
  const [movies, setMovies] = useState([]);
  const [saveMovie, setSaveMovie] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [notFoundSaved, setNotFoundSaved] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const [onCheckbox, setOnCheckbox] = useState(false);
  const [onCheckboxSavedMovies, setOnCheckboxSavedMovies] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstSearch, setFirstSearch] = useState(false);
  const [infoTool, setInfoTool] = useState({
    message: '',
    img: '',
  });
  const [infoPopup, setInfoPopup] = useState();

  function filterButtonImg() {
    const filterButtonImg = saveMovie.map((res) => res.movieId);
    return filterButtonImg;
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setСurrentUser(res);
          }
        })
        .catch((res) => {
          console.log(`Ошибка: ${res}`);
        });
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
      MainApi.getUser()
        .then((res) => {
          setСurrentUser(res);
        })
        .catch((res) => {
          console.log(`Ошибка: ${res}`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const moviesSavedStorage = localStorage.getItem('saved-movies');
    setSaveMovie(JSON.parse(moviesSavedStorage));
  }, []);

  useEffect(() => {
    const firstSearch = localStorage.getItem('firstSearch');
    if (firstSearch) {
      setFirstSearch(JSON.parse(firstSearch));
    }
  }, []);

  useEffect(() => {
    const moviesSearcStorage = localStorage.getItem('movies-search');
    if (moviesSearcStorage) {
      setMovies(JSON.parse(moviesSearcStorage));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  function cardLike(movie) {
    const filterMovies = saveMovie
      .map((res) => res.movieId)
      .some((res) => res === movie.id);
    if (filterMovies) {
      const returnId = saveMovie.find((i) => i.movieId === movie.id);
      cardDelete(returnId);
    } else {
      MainApi.changeLikeCardStatus(movie)
        .then((newCard) => {
          if (newCard) {
            setSaveMovie([...saveMovie, newCard]);
            localStorage.setItem(
              'saved-movies',
              JSON.stringify([...saveMovie, newCard])
            );
          }
        })
        .catch((res) => {
          console.log(`Ошибка: ${res}`);
        });
      localStorage.setItem('saved-movies', JSON.stringify(saveMovie));
    }
  }

  function cardDelete(card) {
    MainApi.cardDelete(card).catch((res) => {
      console.log(`Ошибка: ${res}`);
    });
    const newList = saveMovie.filter((c) => c._id !== card._id);
    localStorage.setItem('saved-movies', JSON.stringify(newList));
    return setSaveMovie(newList);
  }

  function handleUpdateUser(data) {
    MainApi.setUserInfo(data)
      .then((res) => {
        setСurrentUser(res);
        setInfoPopup(true);
        setInfoTool({
          message: 'Данные изменены!',
          img: succed,
        });
      })
      .catch((err) => console.log(err));
  }

  function handleRegister(data) {
    const { name, email, password } = data;
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          history.push('/movies');
          auth
            .authorize(email, password)
            .then((res) => {
              if (res.token) {
                localStorage.setItem('jwt', res.token);
                MainApi.setToken(res.token);
                return res.token;
              }
            })
            .then((token) => {
              auth
                .getContent(token)
                .then((res) => {
                  if (res) {
                    setLoggedIn(true);
                    setСurrentUser(res);
                    history.push('/movies');
                  }
                })
                .catch((error) => {
                  console.log(`Ошибка: ${error}`);
                });
            })
            .catch((error) => {
              console.log(`Ошибка: ${error}`);
            });
          setInfoPopup(true);
          setInfoTool({
            message:
              'Вы успешно зарегистрировались! Для поиска фильмов введите запрос в поле ввода',
            img: succed,
          });
        }
      })
      .catch((err) => {
        setInfoPopup(true);
        setInfoTool({
          message:
            'Что-то пошло не так! Такой пользователь уже зарегистрирован',
          img: fail,
        });
        console.log(`Такой email существует в базе данных ${err}`);
      });
  }

  function handleLogin(data) {
    auth
      .authorize(data.email, data.password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          MainApi.setToken(res.token);
          return res.token;
        }
      })
      .then((token) => {
        auth
          .getContent(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              setСurrentUser(res);
              MainApi.getMovies()
                .then((data) => {
                  const filterSavedMovies = data.filter(
                    (movie) => movie.owner === res._id
                  );
                  localStorage.setItem(
                    'saved-movies',
                    JSON.stringify(filterSavedMovies)
                  );
                  setSaveMovie(filterSavedMovies);
                })
                .catch((res) => {
                  console.log(`Ошибка: ${res}`);
                });
              history.push('/movies');
              setInfoPopup(true);
              setInfoTool({
                message: `Добро пожаловать ${res.name}! Для поиска фильмов введите запрос в поле ввода`,
                img: succed,
              });
            }
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          });
      })
      .catch((error) => {
        setInfoPopup(true);
        setInfoTool({
          message: 'Что-то пошло не так! Введите правильно данные',
          img: fail,
        });
        console.log(`Ошибка: ${error}`);
      });
  }

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('saved-movies');
    localStorage.removeItem('firstSearch');
    localStorage.removeItem('movies-search');
    setСurrentUser('');
    setMovies([]);
    setSaveMovie([]);
    setLoggedIn(false);
    setFirstSearch(false);
    history.push('/');
  }

  function fuseSearch(text, params) {
    setPreloader(true);
    console.log(params)
    // if (text || params) {
    const fuse = new Fuse(params, {
      keys: ['nameRU'],
      includeScore: 0,
      includeMatches: true,
      findAllMatches: true,
      threshold: 0.1,
      location: 0,
    });
    const results = fuse.search(text.search);

    if (onCheckbox === true) {
      const newResults = results.filter((c) => c.item.duration <= 40);
      const newResultsArr = newResults.map((result) => result.item);
      if (newResultsArr.length === 0) {
        setNotFoundSaved(true);
      } else {
        setNotFoundSaved(false);
      }
      setPreloader(false);
      localStorage.setItem('movies-search', JSON.stringify(newResultsArr));
      return setMovies(newResultsArr);
    }

    if (onCheckboxSavedMovies === true) {
      const newResults = results.filter((c) => c.item.duration <= 40);
      const newResultsArr = newResults.map((result) => result.item);
      if (newResultsArr.length === 0) {
        setNotFoundSaved(true);
      } else {
        setNotFoundSaved(false);
      }
      setPreloader(false);
      return setSaveMovie(newResultsArr);
    }
    const resultsArray = results.map((result) => result.item);
    // console.log(resultsArray);
    if (resultsArray.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    if (firstSearch === false) {
      localStorage.setItem('movies-search', JSON.stringify(resultsArray));
      setPreloader(false);
      return setMovies(resultsArray);
    }

    if (location.pathname === '/movies') {
      localStorage.setItem('movies-search', JSON.stringify(resultsArray));
      setPreloader(false);
      return setMovies(resultsArray);
    }

    if (location.pathname === '/saved-movies') {
      localStorage.setItem('movies-search', JSON.stringify(resultsArray));
      setPreloader(false);
      return setSaveMovie(resultsArray);
    }
    // if (results.length === 0) {
    //   setNotFound(true);
    // } else {
    //   setNotFound(false);
    // }

    setPreloader(false);
    // return results;
    // } else {
    //   console.log('Ничего не найдено!');
    // }
  }

  const onSearch = (text) => {
    if (location.pathname === '/saved-movies') {
      if (text) {
        setRequestFailed(false);
        setNotFound(false);
        const moviesSavedStorage = localStorage.getItem('saved-movies');
        const arrSavedMovies = JSON.parse(moviesSavedStorage);
        fuseSearch(text, arrSavedMovies);

        // console.log(savedMoviesArrSearch)
        // if (onCheckboxSavedMovies === true) {
        //   const newResults = savedMoviesArrSearch.filter(
        //     (c) => c.item.duration <= 40
        //   );
        //   const newResultsArr = newResults.map((result) => result.item);
        //   // if (newResultsArr.length === 0) {
        //   //   setNotFoundSaved(true);
        //   // } else {
        //   //   setNotFoundSaved(false);
        //   // }
        //   return setSaveMovie(newResultsArr);
        // }
        // const resultsArray = savedMoviesArrSearch.map((result) => result.item);
        // if (resultsArray.length === 0) {
        //   setNotFoundSaved(true);
        // } else {
        //   setNotFoundSaved(false);
        // }
        // return setSaveMovie(resultsArray);
      }
    }
    if (location.pathname === '/movies') {
      if (text) {
        // setPreloader(true);
        setRequestFailed(false);
        setNotFound(false);
        if (firstSearch === false) {
          setRequestFailed(false);
          setNotFound(false);
          localStorage.setItem('firstSearch', JSON.stringify(true));
          setFirstSearch(true);
          MoviesApi.getInitialMovies()
            .then((arr) => {
              if (arr) {
                const resultsArray = arr.map((result) => result);
                localStorage.setItem('movies', JSON.stringify(resultsArray));
                // console.log(resultsArray);
                fuseSearch(text, resultsArray);
                // setPreloader(false);
              }

              // const resultsArray = firstArrSearch.map((result) => result.item);
              // setPreloader(false);

              // if (resultsArray.length === 0) {
              //   setNotFound(true);
              // } else {
              //   setNotFound(false);
              // }
              // localStorage.setItem(
              //   'movies-search',
              //   JSON.stringify(resultsArray)
              // );

              // return setMovies(resultsArray);
            })
            .catch((err) => {
              if (err) {
                setRequestFailed(true);
              }
            });
        }
        const moviesArrayStorage = localStorage.getItem('movies-search');
        const arrMovies = JSON.parse(moviesArrayStorage);
        fuseSearch(text, arrMovies);
        // console.log(moviesArrSearch)
        // if (onCheckbox === true) {
        //   const newResults = moviesArrSearch.filter(
        //     (c) => c.item.duration <= 40
        //   );
        //   const newResultsArr = newResults.map((result) => result.item);
        //   // setPreloader(false);
        //   if (newResultsArr.length === 0) {
        //     setNotFound(true);
        //   } else {
        //     setNotFound(false);
        //   }
        //   localStorage.setItem('movies-search', JSON.stringify(newResultsArr));
        //   return setMovies(newResultsArr);
        // }
        // const resultsArray = moviesArrSearch.map((result) => result.item);
        // setPreloader(false);
        // if (resultsArray.length === 0) {
        //   setNotFound(true);
        // } else {
        //   setNotFound(false);
        // }
        // localStorage.setItem('movies-search', JSON.stringify(resultsArray));
        // // setPreloader(false);
        // return setMovies(resultsArray);
      }
    }
  };

  function getWindowDimensions() {
    setScreen(window.innerWidth);
  }
  window.addEventListener('resize', () => {
    setTimeout(getWindowDimensions, 1000);
  });

  function closeAllPopups() {
    setInfoPopup(false);
  }

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            setOnCheckbox={setOnCheckbox}
            onCheckbox={onCheckbox}
            initPreloader={preloader}
            notFound={notFound}
            requestFailed={requestFailed}
            screen={screen}
            cardLike={cardLike}
            itemLike={filterButtonImg}
            movies={movies}
            onSearch={onSearch}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            screen={screen}
            notFound={notFoundSaved}
            saveMovie={saveMovie}
            onSearch={onSearch}
            setOnCheckbox={setOnCheckboxSavedMovies}
            onCheckbox={onCheckboxSavedMovies}
            cardDelete={cardDelete}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            signOut={signOut}
            handleUpdateUser={handleUpdateUser}
          />
          <Route path='/signin'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='*' exact component={ErrorPage} />
          <Route>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/signin' />}
          </Route>
          <Redirect from='*' to='/errors' />
        </Switch>
        <InfoTooltip
          isOpen={infoPopup}
          onClose={closeAllPopups}
          infoTool={infoTool}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
