'use strict';

module.exports = {
  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('multipleChoices', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      question: { type: Sequelize.STRING, allowNull: false },
      choices: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
      practiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'episodes',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  up: function (queryInterface) {
    return queryInterface.dropTable('multipleChoices');
  }
};
