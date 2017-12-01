module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  // DB constraint enforces composite unique type/foreignKey combinations

  const Exercise = sequelize.define('exercise', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: {
      type: DataTypes.ENUM(
        'characterPinyin',
        'characterStrokeQuiz',
        'audioToText',
        'multipleChoice'
      ),
      allowNull: false
    },
    characterId: {
      type: DataTypes.INTEGER
    },
    multipleChoiceId: {
      type: DataTypes.INTEGER
    },
    audioToTextId: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: true,
    validate: {
      exclusiveArcs() {
        // See: https://stackoverflow.com/questions/922184/why-can-you-not-have-a-foreign-key-in-a-polymorphic-association
        // Requires that exactly one of these foreign keys can be non-NULL
        const foreignKeys = ['characterId', 'multipleChoiceId', 'audioToTextId'];
        let nonNullKeys = foreignKeys.length;
        foreignKeys.forEach(key => {
          if (this[key] === null) {
            nonNullKeys --;
          }
        });
        if (nonNullKeys !== 1) {
          throw new Error('Exactly one exercise element needs to be associated');
        }
      },
      matchTypeAndForeignKey() {
        switch (this.type) {
          case 'characterPinyin':
          case 'characterStrokeQuiz':
            if (this.characterId === null) {
              throw new Error(this.type + ' exercises need to have an associate character');
            }
            break;
          case 'audioToText':
            if (this.audioToTextId === null) {
              throw new Error(this.type + ' exercises need to have an associate audioToText');
            }
            break;
          case 'multipleChoice':
            if (this.multipleChoiceId === null) {
              throw new Error(this.type + ' exercises need to have an associate multipleChoice');
            }
            break;
          default:
            throw new Error('Unknown exercise type: ', this.type);
        }
      }
    }
  });

  Exercise.associate = () => {
    Exercise.hasMany(models.answer);
    Exercise.belongsTo(models.audioToText);
    Exercise.belongsTo(models.character);
    Exercise.belongsTo(models.multipleChoice);
    Exercise.hasMany(models.practiceExercise);
    Exercise.belongsToMany(models.practice, { through: 'practiceExercise' });
  };

  return Exercise;
};
