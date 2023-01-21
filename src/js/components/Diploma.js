import { diplomaImgClass } from '../modules/constants.js';

export default class Diploma {
  constructor(data, diplomaClass, diplomaTemplateId, handleDiplomaClick) {
    this._img = data.img;
    this._name = data.name;
    this._diplomaClass = diplomaClass;
    this._id = data.id;
    this._diplomaTemplateId = diplomaTemplateId;
    this._handleDiplomaClick = handleDiplomaClick;
  }

  _getElementDiploma() {
  	const elementTemplate = document.querySelector(this._diplomaTemplateId).content;
    const elementDiploma = elementTemplate.querySelector(this._diplomaClass).cloneNode(true);

    return elementDiploma;
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', evt => {
      this._handleDiplomaClick();
    });
  }

  generateElementDiploma() {
    this._element = this._getElementDiploma();
    this._elementImg = this._element.querySelector(diplomaImgClass);

    this._setEventListeners();
    this._elementImg.src = this._img;
    this._elementImg.alt = this._name;

    return this._element;
  }
}
