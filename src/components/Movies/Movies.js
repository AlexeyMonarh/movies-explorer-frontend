import React from "react";
// import Preloader from "./Preloader/Preloader";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  // const [preloader, setPreloader] = useState(false);

  return (
    <div className="movies">
      <Header background="header_background" />
      <SearchForm />
      <MoviesCardList
      cardLike={props.cardLike}
      itemLike={props.itemLike}
      movies={props.movies}
      cardDelete={props.cardDelete}
      />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default Movies;
