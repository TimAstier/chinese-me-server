'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('characters', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      simpChar: { type: Sequelize.STRING(1), allowNull: false },
      pinyinNumber: { type: Sequelize.STRING },
      audioUrl: { type: Sequelize.STRING },
      etymologyUrl: { type: Sequelize.STRING },
      writingUrl: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('characters');
  }
};
