import React from "react";
import iconSearch from "../../../images/svg/icon-search.svg";

function SearchForm(params) {
  return (
    <div className="search-form">
      <div className="search-form__search">
        <input type="search" className="search-form__search-input" />
        <button type="submit" className="search-form__search-button">
          <img src={iconSearch} alt="" />
        </button>
      </div>
      <label className="search-form__checkbox">
        <input type="checkbox" className="search-form__checkbox-input" />
        <div className="search-form__checkbox-text">Короткометражки</div>
      </label>
    </div>
  );
}

export default SearchForm;
