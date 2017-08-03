'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password_digest: { type: Sequelize.STRING },
      active: { type: Sequelize.BOOLEAN },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('users');
  }
};
