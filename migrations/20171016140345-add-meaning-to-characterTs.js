'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characterTs', 'meaning', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('characterTs', 'meaning');
  }
};
