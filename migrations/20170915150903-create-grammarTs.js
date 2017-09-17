'use strict';
// This migration includes an example of a composite unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('grammarTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      grammarId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'grammars',
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
      title: { type: Sequelize.STRING },
      videoUrl: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['grammarId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('grammarTs');
  }
};
