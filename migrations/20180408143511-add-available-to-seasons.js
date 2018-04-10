'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'seasons',
        'available',
        { type: Sequelize.BOOLEAN }
      );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('seasons', 'available');
  }
};
