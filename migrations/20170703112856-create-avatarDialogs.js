'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('avatarDialogs', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      avatarId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'avatars',
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
    return queryInterface.dropTable('avatarDialogs');
  }
};
