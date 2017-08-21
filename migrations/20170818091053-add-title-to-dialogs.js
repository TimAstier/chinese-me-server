'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'dialogs',
      'title',
      {
        type: Sequelize.STRING,
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('dialogs', 'title');
  }
};
