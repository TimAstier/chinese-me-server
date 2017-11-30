'use strict';

module.exports = {
  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('characterExercises', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      practiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'practices',
          key: 'id'
        }
      },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'characters',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM('characterPinyin', 'characterStrokeQuiz')
      },
      number: {
        type: Sequelize.INTEGER,
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  up: function (queryInterface) {
    return queryInterface.dropTable('characterExercises');
  }
};
