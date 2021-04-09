import React, { useEffect, useState } from 'react';
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
import iconLike from '../../images/svg/icon-like.svg';
import iconDislike from '../../images/svg/icon-dislike.svg';
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
  // const [itemLike, setItemLike] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const [onCheckbox, setOnCheckbox] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [token, setToken] = useState(false);
  const [infoTool, setInfoTool] = useState({
    message: '',
    img: '',
  });
  const [infoPopup, setInfoPopup] = useState();
  const filterButtonImg = saveMovie
    .map((res) => res.owner)
    .some((res) => res === currentUser._id);

  console.log(filterButtonImg)

  // const err = (res) => {
  //   console.log(`Ошибка: ${res}`);
  // };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // history.push('/movies');
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
      // setLoggedIn(true)
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
    const moviesStorage = localStorage.getItem('movies');
    if (moviesStorage) {
      setMovies(JSON.parse(moviesStorage));
    }
  }, []);
  // function handleCardLike(card) {
  //   const isLiked = card.likes.some((i) => i === currentUser._id);
  //   api
  //     .changeLikeCardStatus(card._id, !isLiked)
  //     .then((newCard) => {
  //       const newCards = cards.map((c) =>
  //         c._id === card._id ? newCard.data : c
  //       );
  //       setCards(newCards);
  //     })
  //     .catch(err);
  // }

  useEffect(() => {
    const moviesSavedStorage = localStorage.getItem('saved-movies');
    // const arrayMovies = JSON.parse(moviesSavedStorage);

    // console.log(movies);
    // if (filterButtonImg) {
    //   setItemLike(true);
    // }
    // if (filterButtonImg) {
    //   setItemLike(false);
    // }
    console.log(filterButtonImg);
    setSaveMovie(JSON.parse(moviesSavedStorage));
  }, []);

  function cardLike(movie) {
    const filterMovies = saveMovie
      .map((res) => res.movieId)
      .some((res) => res === movie.id);
    if (filterMovies) {
      setInfoPopup(true);
      setInfoTool({
        message: 'Такой фильм есть в вашей коллекции!',
        img: succed,
      });
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
      // setItemLike(iconLike);
    }
  }

  function cardDelete(card) {
    console.log(card);
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
                    // setToken(true);
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
              // setToken(true);
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
    setСurrentUser('');
    setMovies([]);
    setSaveMovie([]);
    setLoggedIn(false);
    history.push('/');
  }

  const onSearch = (text) => {
    if (location.pathname === '/saved-movies') {
      // setPreloader(true);
      console.log('Search Save');
    }
    if (location.pathname === '/movies') {
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
            if (onCheckbox === true) {
              const newResults = results.filter((c) => c.item.duration <= 40);
              const newResultsArr = newResults.map((result) => result.item);
              setPreloader(false);
              if (newResultsArr.length === 0) {
                setNotFound(true);
              } else {
                setNotFound(false);
              }
              localStorage.setItem('movies', JSON.stringify(newResultsArr));
              return setMovies(newResultsArr);
            }
            const resultsArray = results.map((result) => result.item);
            setPreloader(false);
            if (resultsArray.length === 0) {
              setNotFound(true);
            } else {
              setNotFound(false);
            }
            localStorage.setItem('movies', JSON.stringify(resultsArray));
            return setMovies(resultsArray);
          })
          .catch((err) => {
            if (err) {
              setRequestFailed(true);
            }
          });
      }
    }
  };

  function getWindowDimensions() {
    setScreen(window.innerWidth);
  }
  window.addEventListener('resize', () => {
    setTimeout(getWindowDimensions, 1000);
  });

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
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
            <Main />
          </Route>
          {/* <Route > */}
          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            // token={token}
            setOnCheckbox={setOnCheckbox}
            onCheckbox={onCheckbox}
            initPreloader={preloader}
            notFound={notFound}
            requestFailed={requestFailed}
            screen={screen}
            cardLike={cardLike}
            itemLike={filterButtonImg}
            movies={movies}
            // saveMovie={saveMovie}
            onSearch={onSearch}
            // cardDelete={cardDelete}
          />
          {/* <Movies
          setOnCheckbox={setOnCheckbox}
          onCheckbox={onCheckbox}
          initPreloader={preloader}
          notFound={notFound}
          requestFailed={requestFailed}
          screen={screen}
          cardLike={cardLike}
          itemLike={itemLike}
          movies={movies}
          saveMovie={saveMovie}
          onSearch={onSearch}
          cardDelete={cardDelete}
          /> */}
          {/* </Route> */}
          <Route path='/saved-movies'>
            <SavedMovies
              screen={screen}
              saveMovie={saveMovie}
              onSearch={onSearch}
              setOnCheckbox={setOnCheckbox}
              onCheckbox={onCheckbox}
              cardDelete={cardDelete}
            />
          </Route>
          <Route path='/profile'>
            <Profile signOut={signOut} handleUpdateUser={handleUpdateUser} />
          </Route>
          <Route path='/signin'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/errors'>
            <ErrorPage />
          </Route>
          <Route>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/signin' />}
          </Route>
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
