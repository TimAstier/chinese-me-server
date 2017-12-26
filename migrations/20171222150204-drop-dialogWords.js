'use strict';

module.exports = {
  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('dialogWords', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      dialogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dialogs',
          key: 'id'
        }
      },
      wordId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'words',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  up: function (queryInterface) {
    return queryInterface.dropTable('dialogWords');
  }
};
