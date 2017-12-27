'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface.dropTable('audioToTexts');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('audioToTexts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      audioUrl: { type: Sequelize.STRING },
      practiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'practices',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  }
};
