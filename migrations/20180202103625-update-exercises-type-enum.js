'use strict';

const replaceEnum = require('sequelize-replace-enum-postgres').default;

module.exports = {
  up: (queryInterface) => {
    // add textToSpeech and audioToSpeech
    return replaceEnum({
      queryInterface,
      tableName: 'exercises',
      columnName: 'type',
      defaultValue: 'textToText',
      newValues: [
        'textToText',
        'choicesToOrder',
        'audioToText',
        'audioToChoice',
        'textToChoice',
        'audioToWords',
        'characterPinyin',
        'characterStroke',
        'textToSpeech',
        'audioToSpeech'
      ],
      enumName: 'enum_exercises_type'
    });
  },

  down: (queryInterface) => {
    return replaceEnum({
      queryInterface,
      tableName: 'exercises',
      columnName: 'type',
      defaultValue: 'textToText',
      newValues: [
        'textToText',
        'choicesToOrder',
        'audioToText',
        'audioToChoice',
        'textToChoice',
        'audioToWords',
        'characterPinyin',
        'characterStroke',
      ],
      enumName: 'enum_exercises_type'
    });
  }
};
