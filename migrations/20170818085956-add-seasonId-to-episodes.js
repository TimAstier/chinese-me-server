'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'episodes',
      'seasonId',
      {
        type: Sequelize.INTEGER,
        reference: {
          model: 'seasons',
          key: 'id'
        }
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('episodes', 'seasonId');
  }
};
