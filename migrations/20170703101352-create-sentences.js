'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('sentences', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      order: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
      audioUrl: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      mood: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      chinese: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      english: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
      statementId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'statements',
          key: 'id'
        }
      },
      avatarId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'avatars',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('sentences');
  }
};
