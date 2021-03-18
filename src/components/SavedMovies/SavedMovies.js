import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(params) {
  return (
    <div className="saved-movies">
      <Header background="header_background"  />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default SavedMovies;
