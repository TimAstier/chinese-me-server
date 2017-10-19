'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('dialogWords', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      dialogId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'dialogs',
          key: 'id'
        }
      },
      wordId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'words',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('dialogWords');
  }
};
