'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('grammars', 'videoUrl')
      .then(() => {
        return queryInterface
          .removeColumn('grammars', 'title');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'grammars',
        'title',
        { type: Sequelize.STRING }
      )
      .then(() => {
        return queryInterface.addColumn(
          'grammars',
          'videoUrl',
          { type: Sequelize.STRING }
        );
      });
  }
};
