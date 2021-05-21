import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <div className='saved-movies'>
      <Header background='header_background' />
      <SearchForm
        onSearch={props.onSearch}
        setOnCheckbox={props.setOnCheckbox}
        onCheckbox={props.onCheckbox}
        setOnCheckboxSavedMovies={props.setOnCheckboxSavedMovies}
        onCheckboxSavedMovies={props.onCheckboxSavedMovies}
      />
      <MoviesCardList
        notFound={props.notFound}
        screen={props.screen}
        cardLike={props.cardLike}
        itemLike={props.itemLike}
        movies={props.saveMovie}
        cardDelete={props.cardDelete}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
