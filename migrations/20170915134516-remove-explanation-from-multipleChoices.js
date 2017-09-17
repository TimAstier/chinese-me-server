'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('multipleChoices', 'explanation');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'multipleChoices',
        'explanation',
        { type: Sequelize.STRING }
      );
  }
};
