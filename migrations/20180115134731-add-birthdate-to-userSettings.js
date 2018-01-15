'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('userSettings', 'birthdate', Sequelize.DATE );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSettings', 'birthdate');
  }
};
