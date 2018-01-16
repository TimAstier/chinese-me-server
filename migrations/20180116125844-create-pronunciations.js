'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('pronunciations', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      order: { type: Sequelize.INTEGER },
      episodeId: {
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

  down: function (queryInterface) {
    return queryInterface.dropTable('pronunciations');
  }
};
