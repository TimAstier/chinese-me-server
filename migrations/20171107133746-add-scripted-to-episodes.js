'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('episodes', 'scripted', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('episodes', 'scripted');
  }
};
