'use strict';
// This migration includes an example of a composite unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('exampleTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      exampleId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'examples',
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
      translation: { type: Sequelize.STRING },
      literalTranslation: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['exampleId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('exampleTs');
  }
};
