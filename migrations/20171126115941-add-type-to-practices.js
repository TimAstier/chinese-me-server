'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'practices',
      'type',
      {
        type: Sequelize.ENUM('review', 'exam')
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('practices', 'type');
  }
};
