'use strict';
// This migration includes an example of a composite unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('exerciseTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      exerciseId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'exercises',
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
      text: { type: Sequelize.STRING },
      choices: { type: Sequelize.ARRAY(Sequelize.STRING) },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['exerciseId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('exerciseTs');
  }
};
