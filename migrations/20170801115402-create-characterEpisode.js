'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('characterEpisodes', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      characterId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'characters',
          key: 'id'
        }
      },
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
    return queryInterface.removeTable('characterEpisodes');
  }
};
