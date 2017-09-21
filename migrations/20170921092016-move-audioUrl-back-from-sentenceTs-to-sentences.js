'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('sentenceTs', 'audioUrl')
      .then(() => {
        return queryInterface
          .addColumn('sentences', 'audioUrl', Sequelize.STRING);
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('sentences', 'audioUrl')
      .then(() => {
        return queryInterface
          .addColumn('sentenceTs', 'audioUrl', Sequelize.STRING);
      });
  }
};
