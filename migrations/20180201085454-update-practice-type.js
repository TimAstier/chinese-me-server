'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
    .removeColumn('practices', 'type')
    .then(() => {
      return queryInterface.addColumn(
        'practices',
        'type',
        {
          type: Sequelize.STRING
        }
      );
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('practices', 'type')
      .then(() => {
        return queryInterface.addColumn(
          'practices',
          'type',
          {
            // Not reverting to ENUM because sequelize doesn't update ENUM TYPES
            type: Sequelize.STRING
          }
        );
      });
  }
};
