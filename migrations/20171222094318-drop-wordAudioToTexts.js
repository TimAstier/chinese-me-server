'use strict';

module.exports = {
  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wordAudioToTexts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      wordId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'words',
          key: 'id'
        }
      },
      audioToTextId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'audioToTexts',
          key: 'id'
        }
      },
      order: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  up: function (queryInterface) {
    return queryInterface.dropTable('wordAudioToTexts');
  }
};
