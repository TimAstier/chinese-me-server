'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('episodes', 'requiredUserData', {
        type: Sequelize.ARRAY(Sequelize.STRING)
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('episodes', 'requiredUserData');
  }
};
