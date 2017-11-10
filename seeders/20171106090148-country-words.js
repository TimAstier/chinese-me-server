'use strict';
require('../config');
const countries = require('i18n-iso-countries');
const models = require('../models');

let key;
const objectArray = [];
const nameIdArray = [];
const stringArray = [];
const object = countries.getNames('zh');
// TODO: Add pinyin
for (key in object) {
  if (object.hasOwnProperty(key)) {
    objectArray.push( { chinese: object[key] } );
    nameIdArray.push( { [object[key]]: key } );
    stringArray.push(object[key]);
  }
}

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .bulkInsert('words', objectArray, { returning: true })
      .then(words => {
        // TODO: Add translation
        // words.forEach(w => console.log(w.id));
        // use addTranslation?
      });
    // TODO: Add link to episode I
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('words', {
      chinese: { $in: stringArray }
    });
  }
};
