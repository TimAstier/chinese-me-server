module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const ExerciseWord = sequelize.define('exerciseWord', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    exerciseId: { type: DataTypes.INTEGER },
    wordId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  ExerciseWord.associate = () => {
    ExerciseWord.belongsTo(models.exercise);
    ExerciseWord.belongsTo(models.word);
  };

  return ExerciseWord;
};
