'use strict';
// This migration includes an example of a composite unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('multipleChoiceTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      multipleChoiceId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'multipleChoices',
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
      explanation: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['multipleChoiceId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('multipleChoiceTs');
  }
};
