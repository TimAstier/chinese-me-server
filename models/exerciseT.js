module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const ExerciseT = sequelize.define('exerciseT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.STRING },
    choices: { type: DataTypes.ARRAY(DataTypes.STRING) },
  }, {
    timestamps: true
  });

  ExerciseT.associate = () => {
    ExerciseT.belongsTo(models.exercise);
    ExerciseT.belongsTo(models.language);
  };

  return ExerciseT;
};
