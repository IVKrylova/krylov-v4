import { diplomaImgClass } from '../modules/constants.js';

export default class Diploma {
  constructor(data, diplomaClass, diplomaTemplateId) {
    this._img = data.img;
    this._name = data.name;
    this._diplomaClass = diplomaClass;
    this._id = data.id;
    this._diplomaTemplateId = diplomaTemplateId;
  }

  _getElementDiploma() {
  	const elementTemplate = document.querySelector(this._diplomaTemplateId).content;
    const elementDiploma = elementTemplate.querySelector(this._diplomaClass).cloneNode(true);

    return elementDiploma;
  }

  generateElementDiploma() {
    this._element = this._getElementDiploma();
    this._elementImg = this._element.querySelector(diplomaImgClass);

    this._elementImg.src = this._img;
    this._elementImg.alt = this._name;

    return this._element;
  }
}
