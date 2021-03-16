import React from "react";

function Portfolio(params) {
  return (
    <div className='portfolio'>
      <ul className='portfolioItems'>
        Портфолио
        <li className='portfolioItem'>
          <a href='#' className='portfolioItemLink'>Статичный сайт</a>↗
        </li>
        <li className='portfolioItem'>
          <a href='#' className='portfolioItemLink'>Адаптивный сайт</a>↗
        </li>
        <li className='portfolioItem'>
          <a href='#' className='portfolioItemLink'>Одностраничное приложение</a>↗
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
