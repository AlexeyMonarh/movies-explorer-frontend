import { React } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      infoTool={props.infoTool}
      img={props.infoTool.img}
      message={props.infoTool.message}
    />
  );
}

export default InfoTooltip;
