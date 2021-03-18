import React from "react";
import iconSearch from "../../../images/svg/icon-search.svg";

function SearchForm(params) {
  return (
    <div className="search-form">
      <form className="search-form__search">
        <input type="search" className="search-form__search-input" placeholder='Фильм' />
        <button type="submit" className="search-form__search-button">
          <img src={iconSearch} alt="" />
        </button>
      </form>
      <label className="search-form__checkbox">
        <input type="checkbox" className="search-form__checkbox-input" />
        <div className="search-form__checkbox-text">Короткометражки</div>
      </label>
    </div>
  );
}

export default SearchForm;
