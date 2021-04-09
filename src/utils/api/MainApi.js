const thenMainApi = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then(thenMainApi);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(thenMainApi);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(thenMainApi);
  }

  // setAvatar(avatar) {
  //   return fetch(this._baseUrl + '/users/me/avatar', {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify(avatar)
  //   }).then(thenMainApi)
  // }

  // createNewCard(element) {
  //   return fetch(this._baseUrl + '/cards', {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: element.name,
  //       link: element.link,
  //     })
  //   }).then(thenMainApi)
  // }

  changeLikeCardStatus(movie) {
    // console.log(movie);
    // if (movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body:
        // JSON.stringify(movie),
        JSON.stringify({
          country: movie.country || 'default',
          director: movie.director || 'default',
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movie.image
            ? `https://api.nomoreparties.co${movie.image.url}`
            : 'https://upload.wikimedia.org/wikipedia/ru/0/04/%D0%9D%D0%95%D0%A2_%D0%94%D0%9E%D0%A1%D0%A2%D0%A3%D0%9F%D0%9D%D0%9E%D0%93%D0%9E_%D0%98%D0%97%D0%9E%D0%91%D0%A0%D0%90%D0%96%D0%95%D0%9D%D0%98%D0%AF.jpg',
          trailer: movie.trailerLink,
          thumbnail: movie.image
            ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            : 'https://www.youtube.com',
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        }),
    }).then(thenMainApi);
    // } else {
    //   return fetch(`${this._baseUrl}/movies/${movie.id}`, {
    //     method: 'DELETE',
    //     headers: this._headers,
    //   }).then(thenMainApi);
    // }
  }
  cardDelete(card) {
    console.log(card)
    return fetch(`${this._baseUrl}/movies/${card._id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(thenMainApi);
  }
}

const api = new MainApi({
  baseUrl: 'https://api.diploma-project-praktikum.ru',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});
// https://api.diploma-project-praktikum.ru
//http://localhost:3001
export default api;
