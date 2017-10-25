'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('userEpisodes', 'review');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('userEpisodes', 'review', Sequelize.BOOLEAN );
  }
};
