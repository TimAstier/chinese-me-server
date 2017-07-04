'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'avatarDialogs',
      'order',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('avatarDialogs', 'order');
  }
};
