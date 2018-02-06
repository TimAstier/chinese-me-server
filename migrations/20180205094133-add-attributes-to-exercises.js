'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'exercises',
        'number', {
          type: Sequelize.INTEGER
        }
      )
      .then(() => {
        return queryInterface
          .addColumn(
            'exercises',
            'practiceId', {
              type: Sequelize.INTEGER,
              references: {
                model: 'practices',
                key: 'id'
              }
            }
          );
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('exercises', 'number')
      .then(() => {
        return queryInterface.removeColumn('exercises', 'practiceId');
      });
  }
};
