'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('dialogs', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      introAudioUrl: { type: Sequelize.STRING },
      order: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      episodeId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'episodes',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('dialogs');
  }
};
