'use strict';

module.exports = {
  up: function (queryInterface) {
    return queryInterface
      .removeColumn('dialogs', 'englishTitle')
      .then(() => {
        return queryInterface
          .removeColumn('dialogs', 'englishIntro');
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'dialogs',
        'englishIntro',
        { type: Sequelize.TEXT }
      )
      .then(() => {
        return queryInterface.addColumn(
          'dialogs',
          'englishTitle',
          { type: Sequelize.STRING }
        );
      });
  }
};
