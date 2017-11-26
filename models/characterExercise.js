module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const CharacterExercise = sequelize.define('characterExercise', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.INTEGER },
    type: { type: DataTypes.ENUM('characterPinyin', 'characterStrokeQuiz') }
  }, {
    timestamps: true
  });

  CharacterExercise.associate = () => {
    CharacterExercise.belongsTo(models.practice);
    CharacterExercise.belongsTo(models.character);
  };

  return CharacterExercise;
};
