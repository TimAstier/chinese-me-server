'use strict';

module.exports = {
  up: function(queryInterface) {
    return queryInterface.changeColumn('users', 'active', {
      type: 'BOOLEAN USING CAST("active" as BOOLEAN)',
      allowNull: false,
      defaultValue: false
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'active', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
