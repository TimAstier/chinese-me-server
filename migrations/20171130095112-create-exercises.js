'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('exercises', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: Sequelize.ENUM(
          'characterPinyin',
          'characterStrokeQuiz',
          'audioToText',
          'multipleChoice'
        ),
        unique: 'exercise_unicity'
      },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'characters',
          key: 'id'
        },
        unique: 'character_unicity'
      },
      audioToTextId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'audioToTexts',
          key: 'id'
        },
        unique: 'audioToText_unicity'
      },
      multipleChoiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'multipleChoices',
          key: 'id'
        },
        unique: 'mutipleChoice_unicity'
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    }, {
      uniqueKeys: {
        multipleChoice_unicity: {
          fields: ['type', 'multipleChoiceId']
        },
        audioToText_unicity: {
          fields: ['type', 'audioToTextId']
        },
        character_unicity: {
          fields: ['type', 'characterId']
        }
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('exercises');
  }
};
