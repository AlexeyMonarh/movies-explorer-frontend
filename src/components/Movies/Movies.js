import React from "react";
// import Preloader from "./Preloader/Preloader";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(params) {
  // const [preloader, setPreloader] = useState(false);

  return (
    <div className="movies">
      <Header background="header_background" />
      <SearchForm />
      <MoviesCardList />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default Movies;
