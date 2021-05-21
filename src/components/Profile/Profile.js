import React from 'react';
import { Formik } from 'formik';
import validationSchema from '../../utils/FormValidator/FormValidatorProfile';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className='profile'>
      <Header background='header_background' />
      <div className='profile-block'>
        <h2 className='profile-block__title'>{`Привет, ${currentUser.name}!`}</h2>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: `${currentUser.name}`,
            email: `${currentUser.email}`,
          }}
          validateOnBlur
          onSubmit={(values) => {
            props.handleUpdateUser(values);
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
                {touched.name && errors.name && (
                  <p className='error error_top'>{errors.name}</p>
                )}
                <div className='profile-block__form-item'>
                  <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder={'Ваше имя'}
                    required
                    className='profile-block__form-input'
                  />
                  <label
                    className='profile-block__form-item-input-label'
                    htmlFor={`name`}>
                    Имя
                  </label>
                </div>
                <div className='profile-block__form-item'>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={'Ваша почта'}
                    required
                    autoComplete='off'
                    className='profile-block__form-input'
                  />
                  <label
                    className='profile-block__form-item-input-label'
                    htmlFor={`email`}>
                    Почта
                  </label>
                </div>
                {touched.email && errors.email && (
                  <p className='error'>{errors.email}</p>
                )}
              </div>
              <div className='profile-block__form-buttons'>
                <button
                  type='submit'
                  className={
                    !isValid && !dirty
                      ? 'profile-block__form-button button_disabled'
                      : 'profile-block__form-button link_hover'
                  }
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}>
                  Редактировать
                </button>
                <span
                  className='profile-block__form-link link_hover'
                  onClick={props.signOut}>
                  Выйти из аккаунта
                </span>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Profile;
