'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('answers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercises',
          key: 'id'
        },
        unique: 'answer_unicity'
      },
      value: {
        type: Sequelize.STRING,
        unique: 'answer_unicity'
      },
      isCorrect: {
        type: Sequelize.BOOLEAN
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        answer_unicity: {
          fields: ['exerciseId', 'value']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('answers');
  }
};
