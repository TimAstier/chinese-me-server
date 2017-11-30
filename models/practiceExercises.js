module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const PracticeExercises = sequelize.define('practiceExercise', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    exerciseId: { type: DataTypes.INTEGER },
    practiceId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  PracticeExercises.associate = () => {
    PracticeExercises.belongsTo(models.exercise);
    PracticeExercises.belongsTo(models.practice);
  };

  return PracticeExercises;
};
