'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characters', 'hanziData', Sequelize.JSON );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'hanziData');
  }
};
