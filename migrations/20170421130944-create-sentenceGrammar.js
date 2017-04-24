'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('sentenceGrammars', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      order: { type: Sequelize.INTEGER },
      sentenceId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'sentences',
          key: 'id'
        }
      },
      grammarId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'grammars',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('sentenceGrammar');
  }
};
