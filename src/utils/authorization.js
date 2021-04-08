export const BASE_URL = 'https://api.diploma-project-praktikum.ru';
// https://api.diploma-project-praktikum.ru
// http://localhost:3001
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject('Некорректно заполнено одно из полей')
  );
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject('Пользователь с email не найден')
  );
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) =>
    res.ok
      ? res.json()
      : Promise.reject('Токен не передан или передан не в том формате')
  );
};
