'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('words', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      chinese: { type: Sequelize.STRING, allowNull: false, unique: true },
      pinyin: { type: Sequelize.STRING, allowNull: false },
      pinyint: { type: Sequelize.STRING, allowNull: false },
      english: { type: Sequelize.STRING, allowNull: false },
      explanation: { type: Sequelize.TEXT },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('words');
  }
};
