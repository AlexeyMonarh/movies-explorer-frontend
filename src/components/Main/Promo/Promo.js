import React from "react";
import landingLogo from "../../../images/svg/landing-logo.svg";

function Promo(params) {
  return (
    <div className='promo'>
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
            <a href='#aboutProject' className='promoFooterNavLink'>
              О проекте
            </a>
          </li>
          <li className='promoFooterNavLi'>
            <a href='#techs' className='promoFooterNavLink'>
              Технологии
            </a>
          </li>
          <li className='promoFooterNavLi'>
            <a href='#about-me' className='promoFooterNavLink'>
              Студент
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Promo;
