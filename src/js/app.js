import * as utils from './modules/utils.js';
import Cookies from 'js-cookie';
import Card from './components/Card.js';
import Section from './components/Section.js';
import Diploma from './components/Diploma.js';
import PopupWithImage from './components/PopupWhithImg.js';
import  Swiper, { Navigation, Autoplay } from 'swiper';
import { problems, diplomas } from './modules/data.js';
import {
  cardClass,
  elementTemplateId,
  cardListClass,
  diplomaClass,
  diplomaTemplateId,
  diplomaListClass,
  copyrightClass,
  contactsIconEmailClass,
  contactsLinkEmailClass,
  popupWithImgId,
} from './modules/constants.js';

utils.isWebp();

/* section problems */
const createSectionProblems = data => {
  const problemsList = new Section({
    items: data,
    renderer: item => {
      const problem = new Card(item, cardClass, elementTemplateId);

      return problem.generateElementCard();
      }
    },
    cardListClass
  );
  problemsList.renderItems();
  return problemsList;
}

createSectionProblems(problems);

/* section education */
const createSectionDiplomas = data => {
  const diplomasList = new Section({
    items: data,
    renderer: item => {
      const handleDiplomaClick = _ => {
        popupImage.open(item);
      }

      const diploma = new Diploma(item, diplomaClass, diplomaTemplateId, handleDiplomaClick);

      return diploma.generateElementDiploma();
    }
    },
    diplomaListClass
  );
  diplomasList.renderItems();
  return diplomasList;
}

createSectionDiplomas(diplomas);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [ Navigation, Autoplay ],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* contacts */
const contactsIconEmail = document.querySelector(contactsIconEmailClass);
const contactsLinkEmail = document.querySelector(contactsLinkEmailClass);

contactsLinkEmail.addEventListener('mouseover', () => {
  contactsIconEmail.src = './img/icon-open-email.png';
});
contactsLinkEmail.addEventListener('mouseout', () => {
  contactsIconEmail.src = './img/icon-email.png';
});

/* footer */
const copyright = document.querySelector(copyrightClass);

copyright.innerHTML = `&copy;${new Date().getFullYear()} Все права защищены`;


/* popup with img */
const popupImage = new PopupWithImage(popupWithImgId);
popupImage.setEventListeners();

/* cookies */
/* ToDo cookies notification */

