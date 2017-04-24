'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('sentences', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      chinese: { type: Sequelize.STRING, allowNull: false },
      english: { type: Sequelize.STRING, allowNull: false },
      rawEnglish: { type: Sequelize.STRING, allowNull: false },
      audioUrl: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('sentences');
  }
};
