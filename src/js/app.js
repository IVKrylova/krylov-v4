import * as utils from './modules/utils.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import Diploma from './components/Diploma.js';
import  Swiper, { Navigation } from 'swiper';
import { problems, diplomas } from './modules/data.js';
import {
  cardClass,
  elementTemplateId,
  cardListClass,
  diplomaClass,
  diplomaTemplateId,
  diplomaListClass,
  copyrightClass,
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
      const diploma = new Diploma(item, diplomaClass, diplomaTemplateId);

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
  modules: [ Navigation ],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* footer */
const copyright = document.querySelector(copyrightClass);

copyright.innerHTML = `&copy;${new Date().getFullYear()} Все права защищены`;
