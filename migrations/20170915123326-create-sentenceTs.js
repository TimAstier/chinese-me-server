'use strict';
// This migration includes an example of a composite unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('sentenceTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      sentenceId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'sentences',
          key: 'id'
        }
      },
      languageId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'languages',
          key: 'id'
        },
        unique: 'translation_unique'
      },
      audioUrl: { type: Sequelize.STRING },
      translation: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['sentenceId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('sentenceTs');
  }
};
