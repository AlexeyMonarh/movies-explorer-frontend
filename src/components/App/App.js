import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, Redirect, withRouter } from 'react-router-dom';
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
  const history = useHistory();
  const [screen, setScreen] = useState(window.innerWidth);
  const [movies, setMovies] = useState([]);
  const [saveItems, setSaveItems] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [itemLike, setItemLike] = useState(iconDislike);
  const [requestFailed, setRequestFailed] = useState(false);
  const [onCheckbox, setOnCheckbox] = useState(false);
  const [currentUser, setСurrentUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [infoTool, setInfoTool] = useState({
    message: '',
    img: '',
  });
  const [registerPopup, setRegisterPopup] = useState();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  // const err = (res) => {
  //   console.log(`Ошибка: ${res}`);
  // };

  // console.log(currentUser);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          // console.log(res)
          if (res) {
            setUserData({ email: res.email });
            setLoggedIn(true);
            setСurrentUser(res);
          }
        })
        .catch((res) => {
          console.log(`Ошибка: ${res}`);
        });
    }
  }, []);

  // useEffect(() => {
  //   if (loggedIn) {
  //     history.push("/");
  //     api
  //       .getUser()
  //       .then((res) => {
  //         setСurrentUser(res.data);
  //       })
  //       .catch();
  //     // api
  //     //   .getInitialCards()
  //     //   .then((res) => {
  //     //     setCards(res);
  //     //   })
  //     //   .catch();
  //   }
  // }, [loggedIn]);

  function handleRegister(data) {
    // console.log(data);
    const { name, email, password } = data;
    auth
      .register(name, email, password)
      .then((res) => {
        // console.log(res)
        if (res) {
          history.push('/signin');
          setRegisterPopup(true);
          setInfoTool({
            message: 'Вы успешно зарегистрировались!',
            img: succed,
          });
        }
      })
      .catch((err) => {
        setRegisterPopup(true);
        setInfoTool({
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
          img: fail,
        });
        console.log(`Такой email существует ${err}`);
      });
  }

  function handleLogin(data) {
    // console.log(data);
    const { email, password } = data;
    setUserData({ email: email });
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
            console.log(res)
            if (res) {
              setUserData({ email: res.email });
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
  }

  function signOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

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
  };

  function cardLike(movie) {
    // console.log(movie);
    MainApi.changeLikeCardStatus(movie)
      .then((newCard) => {
        console.log(newCard);
        // const newCards = cards.map((c) =>
        //   c._id === card._id ? newCard.data : c
        // );
        // setCards(newCards);
      })
      .catch((res) => {
        console.log(`Ошибка: ${res}`);
      });

    // setItemLike(iconLike);
  }

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
  window.addEventListener('resize', () => {
    setTimeout(getWindowDimensions, 1000);
  });

  useEffect(() => {
    const moviesStorage = localStorage.getItem('movies');
    if (moviesStorage) {
      return setMovies(JSON.parse(moviesStorage));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  function closeAllPopups() {
    setRegisterPopup(false);
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
            setOnCheckbox={setOnCheckbox}
            onCheckbox={onCheckbox}
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
          saveItems={saveItems}
          onSearch={onSearch}
          cardDelete={cardDelete}
          /> */}
          {/* </Route> */}
          <Route path='/saved-movies'>
            <SavedMovies
              screen={screen}
              saveItems={saveItems}
              cardDelete={cardDelete}
            />
          </Route>
          <Route path='/profile'>
            <Profile signOut={signOut} />
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
          isOpen={registerPopup}
          onClose={closeAllPopups}
          infoTool={infoTool}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
