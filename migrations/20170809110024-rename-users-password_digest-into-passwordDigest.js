'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface.renameColumn(
      'users',
      'password_digest',
      'passwordDigest'
    );
  },

  down: function (queryInterface) {
    return queryInterface.renameColumn(
      'users',
      'passwordDigest',
      'password_digest'
    );
  }
};
