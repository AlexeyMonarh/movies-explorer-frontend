import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import validationSchema from '../../utils/FormValidator/FormValidator'
import logo from '../../images/svg/logo.svg';

function Register(params) {
  return (
    <div className='identification'>
      <Link to='/'>
        <img src={logo} alt='Логотип' />
      </Link>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
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
          <form action='#' className='identification__form'>
            <div className='identification__form-items'>
              <h2 className='identification__form-item-heading'>
                Добро пожаловать!
              </h2>
              <div className='identification__form-item'>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className='identification__form-item-input'
                  required
                />
                <label
                  className='identification__form-item-input-label'
                  htmlFor={`name`}>
                  Имя
                </label>
                {touched.name && errors.name && (
                  <p className='error'>{errors.name}</p>
                )}
              </div>
              <div className='identification__form-item'>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='identification__form-item-input'
                  required
                  autoComplete='off'
                />
                <label
                  className='identification__form-item-input-label'
                  htmlFor={`email`}>
                  Email
                </label>
                {touched.email && errors.email && (
                  <p className='error'>{errors.email}</p>
                )}
              </div>
              <div className='identification__form-item'>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className='identification__form-item-input'
                  required
                />
                <label
                  className='identification__form-item-input-label'
                  htmlFor={`password`}>
                  Пароль
                </label>
                {touched.password && errors.password && (
                  <p className='error'>{errors.password}</p>
                )}
              </div>
            </div>
            <div className='identification__buttons'>
              <button
                type='submit'
                className='identification__button'
                disabled={!isValid && !dirty}
                onClick={handleSubmit}>
                Зарегистрироваться
              </button>
              <span className='identification__span'>
                Уже зарегистрированы?
                <Link className='identification__link' to='/signin'>
                  Войти
                </Link>
              </span>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
