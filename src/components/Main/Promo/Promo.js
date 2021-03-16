import React from "react";
import logo from "../../../images/svg/logo.svg";
import landingLogo from "../../../images/svg/landing-logo.svg";

function Promo(params) {
  return (
    <div className='promo'>
      <div className='promoHeader'>
        <img src={logo} alt='Логотип' className='promoHeaderLogo' />
        <ul className='promoHeaderNav'>
          <li>
            <a href='#' className='promoHeaderLinkReg'>
              Регистрация
            </a>
          </li>
          <li>
            <button className='promoHeaderButton'>Войти</button>
          </li>
        </ul>
      </div>
      <img
        src={landingLogo}
        alt='Логотип Яндекс.Практикума'
        className='promoLogo'
      />
      <h1 className='promoTitle'>
        Учебный проект студента факультета Веб-разработки
      </h1>
      <div className='promoFooter'>
        <ul className='promoFooterNav'>
          <li className='promoFooterNavLi'>
            <a href='#' className='promoFooterNavLink'>
              О проекте
            </a>
          </li>
          <li className='promoFooterNavLi'>
            <a href='#' className='promoFooterNavLink'>
              Технологии
            </a>
          </li>
          <li className='promoFooterNavLi'>
            <a href='#' className='promoFooterNavLink'>
              Студент
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Promo;
