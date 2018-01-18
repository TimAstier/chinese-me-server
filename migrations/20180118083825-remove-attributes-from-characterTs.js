'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('characterTs', 'etymologyUrl')
      .then(() => {
        return queryInterface
          .removeColumn('characterTs', 'writingUrl');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('characterTs', 'etymologyUrl', Sequelize.STRING)
      .then(() => {
        return queryInterface
          .addColumn('characterTs', 'writingUrl', Sequelize.STRING);
      });
  }
};
