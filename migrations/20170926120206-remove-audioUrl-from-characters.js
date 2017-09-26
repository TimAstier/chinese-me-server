'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'audioUrl');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characters', 'audioUrl', Sequelize.STRING);
  }
};
