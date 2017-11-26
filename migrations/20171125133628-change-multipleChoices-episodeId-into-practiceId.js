'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('multipleChoices', 'episodeId')
      .then(() => {
        return queryInterface.addColumn(
          'multipleChoices',
          'practiceId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'practices',
              key: 'id'
            }
          }
        );
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('multipleChoices', 'practiceId')
      .then(() => {
        return queryInterface.addColumn(
          'multipleChoices',
          'episodeId',
          {
            type: Sequelize.INTEGER
          }
        );
      });
  }
};
