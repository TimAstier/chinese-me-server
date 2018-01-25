'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
    .addColumn('userSettings', 'motherTongue', Sequelize.STRING)
    .then(() => {
      return queryInterface
      .addColumn('userSettings', 'otherLanguage', Sequelize.STRING);
    });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSettings', 'motherTongue')
      .then(() => {
        return queryInterface
          .removeColumn('userSettings', 'otherLanguage');
      });
  }
};
