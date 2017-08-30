'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wordAudioToTexts', {
      id: { type: Sequelize.INTEGER, primary: true, autoIncrement: true },
      wordId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'words',
          key: 'id'
        }
      },
      audioToTextId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'audioToTexts',
          key: 'id'
        }
      },
      order: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('wordAudioToTexts');
  }
};
