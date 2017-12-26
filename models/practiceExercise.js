module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const PracticeExercise = sequelize.define('practiceExercise', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    exerciseId: { type: DataTypes.INTEGER },
    practiceId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  PracticeExercise.associate = () => {
    PracticeExercise.belongsTo(models.exercise);
    PracticeExercise.belongsTo(models.practice);
  };

  return PracticeExercise;
};
