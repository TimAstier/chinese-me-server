'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('multipleChoices', 'order')
      .then(() => {
        return queryInterface
          .removeColumn('audioToTexts', 'order');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('audioToTexts', 'order', {
        type: Sequelize.INTEGER
      })
      .then(() => {
        return queryInterface
          .addColumn('multipleChoices', 'order', {
            type: Sequelize.INTEGER
          });
      });
  }
};
