'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('multipleChoices', 'correctAnswer');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('multipleChoices', 'correctAnswer', Sequelize.INTEGER);
  }
};
