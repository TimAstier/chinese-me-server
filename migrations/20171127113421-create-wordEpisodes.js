'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wordEpisodes', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      wordId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'words',
          key: 'id'
        }
      },
      episodeId: {
        type: Sequelize.INTEGER,
        references: {
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
    return queryInterface.dropTable('wordEpisodes');
  }
};
