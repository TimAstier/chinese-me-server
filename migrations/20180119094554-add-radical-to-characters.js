'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characters', 'radical', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'radical');
  }
};
