'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('dialogs', 'hasAudio', {
        type: Sequelize.BOOLEAN
      });
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('dialogs', 'hasAudio');
  }
};
