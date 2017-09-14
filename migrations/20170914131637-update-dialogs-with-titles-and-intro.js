'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .renameColumn(
        'dialogs',
        'title',
        'chineseTitle'
      )
      .then(() => {
        return queryInterface
          .addColumn('dialogs', 'englishTitle', Sequelize.STRING)
          .then(() => {
            return queryInterface
              .addColumn('dialogs', 'englishIntro', Sequelize.TEXT);
          });
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .renameColumn(
        'dialogs',
        'chineseTitle',
        'title'
      )
      .then(() => {
        return queryInterface
          .removeColumn('dialogs', 'englishTitle', Sequelize.STRING)
          .then(() => {
            return queryInterface
              .removeColumn('dialogs', 'englishIntro');
          });
      });
  }
};
