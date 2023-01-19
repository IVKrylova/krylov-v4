import * as utils from './modules/utils.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import { problems } from './modules/data.js';
import {
  cardClass,
  elementTemplateId,
  cardListClass
} from './modules/constants.js';

utils.isWebp();

const crateSection = data => {
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

crateSection(problems);
