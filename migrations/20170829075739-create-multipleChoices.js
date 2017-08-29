'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('multipleChoices', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      question: { type: Sequelize.STRING, allowNull: false },
      choices: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
      correctAnswer: { type: Sequelize.INTEGER, allowNull: false },
      explanation: { type: Sequelize.STRING, allowNull: false },
      episodeId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'episodes',
          key: 'id'
        }
      },
      order: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('multipleChoices');
  }
};
