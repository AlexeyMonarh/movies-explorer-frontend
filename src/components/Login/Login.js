import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import validationSchema from '../../utils/FormValidator/FormValidatorLogin';
import logo from '../../images/svg/logo.svg';

function Login() {
  return (
    <div className='identification'>
      <Link to='/'>
        <img src={logo} alt='Логотип' />
      </Link>
      <Formik
        initialValues={{
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
                Рады видеть!
              </h2>
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
                Войти
              </button>
              <span className='identification__span'>
                Ещё не зарегистрированы?
                <Link className='identification__link' to='/signup'>
                  Регистрация
                </Link>
              </span>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
