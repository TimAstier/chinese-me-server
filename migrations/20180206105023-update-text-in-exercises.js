'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('exercises', 'text')
      .then(() => {
        return queryInterface
          .addColumn(
            'exercises',
            'guidelineText', {
              type: Sequelize.STRING
            }
          );
      })
      .then(() => {
        return queryInterface
          .addColumn(
            'exercises',
            'questionText', {
              type: Sequelize.STRING
            }
          );
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('exercises', 'guidelineText')
      .then(() => {
        return queryInterface
          .removeColumn('exercises', 'questionText');
      })
      .then(() => {
        return queryInterface
          .addColumn(
            'exercises',
            'text', {
              type: Sequelize.STRING
            }
          );
      });
  }
};
