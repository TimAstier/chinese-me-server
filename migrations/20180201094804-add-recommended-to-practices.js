'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
    .addColumn(
      'practices',
      'recommended',
      {
        type: Sequelize.BOOLEAN
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('practices', 'recommended');
  }
};
