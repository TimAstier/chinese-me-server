'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('episodes', 'imageUrl', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('episodes', 'imageUrl');
  }
};
