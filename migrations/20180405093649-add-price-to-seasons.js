'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'seasons',
        'price',
        { type: Sequelize.INTEGER }
      );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('seasons', 'price');
  }
};
