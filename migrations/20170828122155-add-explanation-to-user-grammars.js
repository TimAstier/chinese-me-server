'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'userGrammars',
      'explanation',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('userGrammars', 'explanation');
  }
};
