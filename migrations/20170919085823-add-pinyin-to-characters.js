'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characters', 'pinyin', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'pinyin');
  }
};
