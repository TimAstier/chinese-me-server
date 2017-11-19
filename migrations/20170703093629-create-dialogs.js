'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('dialogs', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      introAudioUrl: { type: Sequelize.STRING },
      order: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      episodeId: {
        type: Sequelize.INTEGER,
        // BUG: Foreign key constraints are not correctly implemented
        // in the DB schema because the following option has a typo.
        // 'reference' should be 'references'
        // The constraint still exists in models thanks to Sequelize
        // This typo exists in most of the tables.
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
