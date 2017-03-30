/* eslint-disable func-names */
'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'active', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: function(queryInterface) {
    return queryInterface.removeColumn('users', 'active');
  }
};
