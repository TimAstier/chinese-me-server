'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'etymologyUrl')
      .then(() => {
        return queryInterface
          .removeColumn('characters', 'writingUrl');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'characters',
        'writingUrl',
        { type: Sequelize.STRING }
      )
      .then(() => {
        return queryInterface.addColumn(
          'characters',
          'etymologyUrl',
          { type: Sequelize.STRING }
        );
      });
  }
};
