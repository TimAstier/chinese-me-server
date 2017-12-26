'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('exerciseWords', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      wordId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'words',
          key: 'id'
        }
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercises',
          key: 'id'
        }
      },
      order: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('exerciseWords');
  }
};
