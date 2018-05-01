'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('codes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      value: { type: Sequelize.STRING },
      activated: { type: Sequelize.BOOLEAN, defaultValue: false },
      shared: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('codes');
  }
};
