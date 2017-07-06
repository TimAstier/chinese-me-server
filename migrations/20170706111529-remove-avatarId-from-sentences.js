'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface.removeColumn('sentences', 'avatarId');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'sentences',
      'avatarId',
      {
        type: Sequelize.INTEGER,
        reference: {
          model: 'avatars',
          key: 'id'
        }
      }
    );
  }
};
