'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('charUsers', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      charId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'chars',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('charUsers');
  }
};
