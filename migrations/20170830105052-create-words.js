'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('words', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      chinese: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      pinyin: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('words');
  }
};
