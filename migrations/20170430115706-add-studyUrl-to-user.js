'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'studyUrl', {
      type: Sequelize.STRING,
      defaultValue: '/study'
    });
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('users', 'studyUrl');
  }
};
