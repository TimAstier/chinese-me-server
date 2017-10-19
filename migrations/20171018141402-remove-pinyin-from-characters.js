'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'pinyin');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characters', 'pinyin', Sequelize.STRING );
  }
};
