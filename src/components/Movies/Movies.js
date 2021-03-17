import React from "react";
// import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies(params) {
  // const [preloader, setPreloader] = useState(false);

  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </div>
  );
}

export default Movies;
