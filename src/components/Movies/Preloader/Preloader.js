import React from 'react';
import './Preloader.css';

const Preloader = (props) => {
  return (
    <>
      <div
        className={
          props.initPreloader ? 'preloader preloader_init' : 'preloader'
        }>
        <div className='preloader__container'>
          <span className='preloader__round'></span>
        </div>
      </div>
      <span
        className={
          props.notFound
            ? 'preloader__not-found preloader__not-found_init'
            : 'preloader__not-found'
        }>
        «Ничего не найдено»
      </span>
      <span
        className={
          props.requestFailed
            ? 'preloader__not-found preloader__not-found_init'
            : 'preloader__not-found'
        }>
        «Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз»
      </span>
    </>
  );
};

export default Preloader;
