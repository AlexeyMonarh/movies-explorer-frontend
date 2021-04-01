// const thenMainApi = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// }

// class MainApi {
//   constructor(options) {
//     this._baseUrl = options.baseUrl;
//     this._headers = options.headers;
//   }

//   setToken(token){
//     this._headers.Authorization = `Bearer ${token}` ;
//   }

//   getInitialCards() {
//     return fetch(this._baseUrl + '/cards', {
//       headers: this._headers
//     }).then(thenMainApi)
//   }

//   getUser() {
//     return fetch(this._baseUrl + '/users/me', {
//       headers: this._headers
//     }).then(thenMainApi)
//   }

//   setUserInfo(data) {
//     return fetch(`${this._baseUrl}/users/me`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: data.name,
//         about: data.about,
//       })
//     }).then(thenMainApi)
//   }

//   setAvatar(avatar) {
//     return fetch(this._baseUrl + '/users/me/avatar', {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify(avatar)
//     }).then(thenMainApi)
//   }

//   createNewCard(element) {
//     return fetch(this._baseUrl + '/cards', {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: element.name,
//         link: element.link,
//       })
//     }).then(thenMainApi)
//   }

//   deleteCard(userId) {
//     return fetch(`${this._baseUrl}/cards/${userId}`, {
//       method: 'DELETE',
//       headers: this._headers,
//       body: JSON.stringify({
//         _id: userId,
//       })
//     }).then(thenMainApi)
//   }

//   changeLikeCardStatus(cardId, isLiked) {
//     if (isLiked) {
//       return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//         method: 'PUT',
//         headers: this._headers
//       }).then(thenMainApi)
//     } else {
//       return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//         method: 'DELETE',
//         headers: this._headers
//       }).then(thenMainApi)
//     }
//   }
// }


// const api = new MainApi({
//   baseUrl: 'https://api.diploma-praktikum.students.nomoredomains.monster',
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//     'Content-Type': 'application/json',
//   }
// });

// export default api;