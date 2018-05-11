'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'userSeasons',
        'purchased',
        { type: Sequelize.BOOLEAN, defaultValue: false }
      )
      .then(() => {
        return queryInterface
          .addColumn('userSeasons', 'paidPrice', { type: Sequelize.FLOAT });
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSeasons', 'purchased')
      .then(() => {
        return queryInterface
          .removeColumn('userSeasons', 'paidPrice');
      });
  }
};
