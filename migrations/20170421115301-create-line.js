'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('lines', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      avatar: { type: Sequelize.STRING, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      meta: { type: Sequelize.STRING },
      text: { type: Sequelize.TEXT, allowNull: false },
      audioUrl: { type: Sequelize.STRING },
      pinyint: { type: Sequelize.TEXT },
      english: { type: Sequelize.TEXT },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('lines');
  }
};
