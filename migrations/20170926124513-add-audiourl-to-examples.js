'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('examples', 'audioUrl', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('examples', 'audioUrl');
  }
};
