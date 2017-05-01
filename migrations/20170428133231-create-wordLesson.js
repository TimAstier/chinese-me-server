'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wordLessons', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      comment: { type: Sequelize.TEXT },
      order: { type: Sequelize.INTEGER },
      wordId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'words',
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
    return queryInterface.dropTable('wordLessons');
  }
};
