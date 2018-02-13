'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface.removeColumn('examples', 'audioUrl');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('examples', 'audioUrl', {
        type: Sequelize.STRING
      });
  }
};
