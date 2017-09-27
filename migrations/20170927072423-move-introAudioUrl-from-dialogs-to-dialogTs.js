'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('dialogs', 'introAudioUrl')
      .then(() => {
        return queryInterface
          .addColumn('dialogTs', 'introAudioUrl', Sequelize.STRING);
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('dialogTs', 'introAudioUrl')
      .then(() => {
        return queryInterface
          .addColumn('dialogs', 'introAudioUrl', Sequelize.STRING);
      });
  }
};
