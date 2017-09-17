'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('dialogTs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      dialogId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'dialogs',
          key: 'id'
        }
      },
      languageId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'languages',
          key: 'id'
        },
        unique: 'translation_unique'
      },
      titleTranslation: { type: Sequelize.STRING },
      intro: { type: Sequelize.TEXT },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        translation_unique: {
          fields: ['dialogId', 'languageId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('dialogTs');
  }
};
