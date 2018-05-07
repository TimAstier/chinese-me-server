'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn( 'users', 'rel', {
        type: Sequelize.STRING
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('users', 'rel');
  }
};
