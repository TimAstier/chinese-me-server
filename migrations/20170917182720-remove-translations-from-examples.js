'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('examples', 'english')
      .then(() => {
        return queryInterface
          .removeColumn('examples', 'literalEnglish');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'examples',
        'literalEnglish',
        { type: Sequelize.STRING }
      )
      .then(() => {
        return queryInterface.addColumn(
          'examples',
          'english',
          { type: Sequelize.STRING }
        );
      });
  }
};
