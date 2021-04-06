import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_open` : `popup`}>
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className={`popup__container popup__container_mobile`}>
        <button className={`popup__close-icon popup__close-icon_mobile`} onClick={props.onClose}></button>
        <div className="infoTool">
          <img src={props.img} alt="Картинка регистрации" />
          <p className="infoTool__title infoTool__title_mobile">{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;