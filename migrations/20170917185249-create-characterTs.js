'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('characterTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      characterId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'characters',
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
      etymologyUrl: { type: Sequelize.STRING },
      writingUrl: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['characterId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('characterTs');
  }
};
