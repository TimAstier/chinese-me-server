'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'userSettings',
        'reasonLearnChinese',
        { type: Sequelize.STRING }
      );
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSettings', 'reasonLearnChinese');
  }
};
