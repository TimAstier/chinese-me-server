'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('exercises', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: Sequelize.ENUM(
          'textToText',
          'choicesToOrder',
          'audioToText',
          'audioToChoice',
          'textToChoice',
          'audioToWord',
          'characterPinyin',
          'characterStroke'
        )
      },
      text: { type: Sequelize.STRING },
      audioUrl: { type: Sequelize.STRING },
      choices: { type: Sequelize.ARRAY(Sequelize.STRING) },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'characters',
          key: 'id'
        },
        unique: 'character_unicity'
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        character_unicity: {
          fields: ['type', 'characterId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('exercises');
  }
};
