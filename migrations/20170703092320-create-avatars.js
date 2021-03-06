'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('avatars', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      chineseName: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('avatars');
  }
};
