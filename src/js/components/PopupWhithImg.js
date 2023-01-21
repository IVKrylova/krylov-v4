import Popup from './Popup.js';
import { popupImgClass } from '../modules/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._elementPopup.querySelector(popupImgClass);
  }

  open(data) {
    super.open();
    this._popupImage.src = data.img;
    this._popupImage.alt = data.name;
  }
}
