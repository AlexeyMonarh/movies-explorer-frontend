import React from 'react';
import iconSearch from '../../../images/svg/icon-search.svg';
import validationSchema from '../../../utils/FormValidator/FormValidatorSearchMovies';
import { Formik } from 'formik';

function SearchForm(props) {
  function toggleCheckbox() {
    props.setOnCheckbox(!props.onCheckbox);
    if (location.pathname === 'saved-movies') {
      props.setOnCheckboxSavedMovies(!props.onCheckboxSavedMovies);
    }
  }

  return (
    <div className='search-form'>
      <Formik
        initialValues={{
          search: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          if (values) {
            props.onSearch(values);
          }
        }}
        validationSchema={validationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form action='#' className='search-form__search'>
            <div className='search-form__search-block'>
              <input
                type='search'
                name='search'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.search}
                className='search-form__search-input'
                placeholder='Фильм'
                required
              />
              {touched.search && errors.search && (
                <p className='error'>{errors.search}</p>
              )}
            </div>
            <button
              type='submit'
              className={
                !isValid || !dirty
                  ? 'search-form__search-button button_disabled'
                  : 'search-form__search-button link_hover'
              }
              disabled={!isValid && !dirty}
              onClick={handleSubmit}>
              <img src={iconSearch} alt='Иконка поиска' />
            </button>
          </form>
        )}
      </Formik>
      <label className='search-form__checkbox'>
        <input
          type='checkbox'
          className='search-form__checkbox-input'
          onChange={toggleCheckbox}
          checked={
            location.pathname === 'saved-movies'
              ? props.onCheckboxSavedMovies
              : props.onCheckbox
          }
        />
        <span className='search-form__checkbox-text'>Короткометражки</span>
      </label>
    </div>
  );
}

export default SearchForm;
