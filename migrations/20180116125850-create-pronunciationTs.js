'use strict';
// This migration includes an example of a composite unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('pronunciationTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      pronunciationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pronunciations',
          key: 'id'
        }
      },
      languageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id'
        },
        unique: 'translation_unique'
      },
      title: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['pronunciationId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('pronunciationTs');
  }
};
