'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characters', 'phonetic', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'phonetic');
  }
};
