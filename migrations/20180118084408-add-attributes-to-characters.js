'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
    .addColumn('characters', 'calligraphyVideo', Sequelize.STRING)
    .then(() => {
      return queryInterface
      .addColumn('characters', 'etymologyHash', Sequelize.STRING);
    })
    .then(() => {
      return queryInterface
      .addColumn('characters', 'calligraphyHash', Sequelize.STRING);
    });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('characters', 'calligraphyVideo')
      .then(() => {
        return queryInterface
          .removeColumn('characters', 'etymologyHash');
      })
      .then(() => {
        return queryInterface
          .removeColumn('characters', 'calligraphyHash');
      });
  }
};
