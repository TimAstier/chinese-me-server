'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'userSettings',
        'familyName',
        { type: Sequelize.STRING }
      )
      .then(() => {
        return queryInterface.addColumn(
          'userSettings',
          'givenName',
          { type: Sequelize.STRING }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'userSettings',
          'nationality',
          { type: Sequelize.STRING }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'userSettings',
          'chineseFamilyName',
          { type: Sequelize.STRING }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'userSettings',
          'chineseGivenName',
          { type: Sequelize.STRING }
        );
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('userSettings', 'familyName')
      .then(() => {
        return queryInterface
          .removeColumn('userSettings', 'givenName');
      })
      .then(() => {
        return queryInterface
          .removeColumn('userSettings', 'nationality');
      })
      .then(() => {
        return queryInterface
          .removeColumn('userSettings', 'chineseFamilyName');
      })
      .then(() => {
        return queryInterface
          .removeColumn('userSettings', 'chineseGivenName');
      });
  }
};
