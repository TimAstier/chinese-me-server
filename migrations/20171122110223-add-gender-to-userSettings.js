'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('userSettings', 'gender', Sequelize.ENUM('Female', 'Male') );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSettings', 'gender');
  }
};
