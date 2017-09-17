'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('sentences', 'english')
      .then(() => {
        return queryInterface
          .removeColumn('sentences', 'audioUrl');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'sentences',
        'audioUrl',
        { type: Sequelize.STRING }
      )
      .then(() => {
        return queryInterface.addColumn(
          'sentences',
          'english',
          { type: Sequelize.STRING }
        );
      });
  }
};
