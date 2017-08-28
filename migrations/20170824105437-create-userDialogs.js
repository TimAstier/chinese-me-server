'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('userDialogs', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      userId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'users',
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
      listen: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      explore: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      roleplay: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('userDialogs');
  }
};
