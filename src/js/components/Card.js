import { problemIconClass, problemTitleClass } from '../modules/constants.js';

export default class Card {
  constructor(data, cardClass, elementTemplateId) {
    this._problem = data.title;
    this._icon = data.icon;
    this._cardClass = cardClass;
    this._id = data.id;
    this._elementTemplateId = elementTemplateId;
  }

  _getElementCard() {
  	const elementTemplate = document.querySelector(this._elementTemplateId).content;
    const elementCard = elementTemplate.querySelector(this._cardClass).cloneNode(true);

    return elementCard;
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementIcon = this._element.querySelector(problemIconClass);
    this._elementTitle = this._element.querySelector(problemTitleClass);

    this._elementIcon.src = this._icon;
    this._elementIcon.alt = this._problem;
    this._elementTitle.textContent = this._problem;

    return this._element;
  }
}
