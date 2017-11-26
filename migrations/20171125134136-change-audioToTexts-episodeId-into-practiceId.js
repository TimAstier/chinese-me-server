'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('audioToTexts', 'episodeId')
      .then(() => {
        return queryInterface.addColumn(
          'audioToTexts',
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
      .removeColumn('audioToTexts', 'practiceId')
      .then(() => {
        return queryInterface.addColumn(
          'audioToTexts',
          'episodeId',
          {
            type: Sequelize.INTEGER
          }
        );
      });
  }
};
