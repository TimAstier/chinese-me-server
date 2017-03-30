/* eslint-disable func-names */
'use strict';

module.exports = {
  up: function(queryInterface) {
    return queryInterface.renameColumn('users', 'timezone', 'country');
  },

  down: function(queryInterface) {
    return queryInterface.renameColumn('users', 'country', 'timezone');
  }
};
