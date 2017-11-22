'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('feedbacks', 'email', Sequelize.STRING );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('feedbacks', 'email');
  }
};
