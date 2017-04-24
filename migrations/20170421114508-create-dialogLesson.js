'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('dialogLessons', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      comment: { type: Sequelize.TEXT },
      order: { type: Sequelize.INTEGER },
      dialogId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'dialogs',
          key: 'id'
        }
      },
      lessonId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'lessons',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('dialogLessons');
  }
};
