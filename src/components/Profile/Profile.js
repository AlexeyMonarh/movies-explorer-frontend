import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import validationSchema from '../../utils/FormValidator/FormValidatorProfile';
import Header from '../Header/Header';

function Profile() {
  return (
    <div className='profile'>
      <Header background='header_background' />
      <div className='profile-block'>
        <h2 className='profile-block__title'>Привет, Виталий!</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
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
            <form className='profile-block__form'>
              <div className='profile-block__form-items'>
                <div className='profile-block__form-item'>
                  <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                    className='profile-block__form-input'
                    dir='rtl'
                  />
                  <label
                    className='profile-block__form-item-input-label'
                    htmlFor={`name`}>
                    Имя
                  </label>
                  {touched.name && errors.name && (
                    <p className='error'>{errors.name}</p>
                  )}
                </div>
                <div className='profile-block__form-item'>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                    autoComplete='off'
                    className='profile-block__form-input'
                    dir='rtl'
                  />
                  <label
                    className='profile-block__form-item-input-label'
                    htmlFor={`email`}>
                    Почта
                  </label>
                  {touched.email && errors.email && (
                    <p className='error'>{errors.email}</p>
                  )}
                </div>
              </div>
              <div className='profile-block__form-buttons'>
                <button
                  type='submit'
                  className='profile-block__form-button'
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}>
                  Редактировать
                </button>
                <Link className='profile-block__form-link' to='/'>
                  Выйти из аккаунта
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Profile;
