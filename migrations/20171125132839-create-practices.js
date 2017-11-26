'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('practices', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      episodeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'episodes',
          key: 'id'
        }
      },
      number: {
        type: Sequelize.INTEGER,
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('practices');
  }
};
