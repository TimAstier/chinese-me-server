'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'seasons',
        'name',
        { type: Sequelize.STRING }
      ).then(() => {
        return queryInterface
          .addColumn(
            'seasons',
            'image',
            { type: Sequelize.STRING }
          );
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('seasons', 'name')
      .then(() => {
        return queryInterface
          .removeColumn('seasons', 'image');
      });
  }
};
