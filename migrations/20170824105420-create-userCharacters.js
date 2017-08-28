'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('userCharacters', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      userId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'users',
          key: 'id'
        }
      },
      characterId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'characters',
          key: 'id'
        }
      },
      etymology: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pinyin: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      writing: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('userCharacters');
  }
};
