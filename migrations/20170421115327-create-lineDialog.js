'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('lineDialogs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      order: { type: Sequelize.INTEGER },
      lineId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'lines',
          key: 'id'
        }
      },
      dialogId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'dialogs',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('lineDialogs');
  }
};
