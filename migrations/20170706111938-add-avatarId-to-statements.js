'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'statements',
      'avatarId',
      {
        type: Sequelize.INTEGER,
        reference: {
          model: 'avatars',
          key: 'id'
        }
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('statements', 'avatarId');
  }
};
