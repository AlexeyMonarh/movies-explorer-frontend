import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  return (
    <div className='movies'>
      <Header background='header_background' />
      <SearchForm
        onSearch={props.onSearch}
        setOnCheckbox={props.setOnCheckbox}
        onCheckbox={props.onCheckbox}
      />
      <MoviesCardList
        initPreloader={props.initPreloader}
        notFound={props.notFound}
        requestFailed={props.requestFailed}
        screen={props.screen}
        cardLike={props.cardLike}
        itemLike={props.itemLike}
        movies={props.movies}
        cardDelete={props.cardDelete}
      />
      <Footer />
    </div>
  );
}

export default Movies;
