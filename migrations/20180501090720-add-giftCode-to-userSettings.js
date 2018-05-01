'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn( 'userSettings', 'giftCode', {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSettings', 'giftCode');
  }
};
