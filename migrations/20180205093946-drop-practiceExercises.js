'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface.dropTable('practiceExercises');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('practiceExercises', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      order: {
        type: Sequelize.INTEGER
      },
      practiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'practices',
          key: 'id'
        }
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercises',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  }
};
