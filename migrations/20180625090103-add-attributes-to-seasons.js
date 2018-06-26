'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('seasons', 'description', {
        type: Sequelize.STRING
      })
      .then(() => {
        return queryInterface
          .addColumn('seasons', 'levels', {
            type: Sequelize.STRING
          });
      });
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('seasons', 'levels')
      .then(() => {
        return queryInterface.removeColumn('seasons', 'description');
      });
  }
};
