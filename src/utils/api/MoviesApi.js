const thenMoviesApi = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // setToken(token){
  //   this._headers.Authorization = `Bearer ${token}` ;
  // }

  getInitialCards() {
    return fetch(this._baseUrl, {
      headers: this._headers
    }).then(thenMoviesApi)
  }

  // getUser() {
  //   return fetch(this._baseUrl + '/users/me', {
  //     headers: this._headers
  //   }).then(thenMoviesApi)
  // }

  // setUserInfo(data) {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: data.name,
  //       about: data.about,
  //     })
  //   }).then(thenMoviesApi)
  // }

  // setAvatar(avatar) {
  //   return fetch(this._baseUrl + '/users/me/avatar', {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify(avatar)
  //   }).then(thenMoviesApi)
  // }

  // createNewCard(element) {
  //   return fetch(this._baseUrl + '/cards', {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: element.name,
  //       link: element.link,
  //     })
  //   }).then(thenMoviesApi)
  // }

  // deleteCard(userId) {
  //   return fetch(`${this._baseUrl}/cards/${userId}`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       _id: userId,
  //     })
  //   }).then(thenMoviesApi)
  // }

  // changeLikeCardStatus(cardId, isLiked) {
  //   if (isLiked) {
  //     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
  //       method: 'PUT',
  //       headers: this._headers
  //     }).then(thenMoviesApi)
  //   } else {
  //     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
  //       method: 'DELETE',
  //       headers: this._headers
  //     }).then(thenMoviesApi)
  //   }
  // }
}


const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    // Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }
});

export default api;