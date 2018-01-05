module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Answer = sequelize.define('answer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    value: { type: DataTypes.STRING, allowNull: false },
    isCorrect: { type: DataTypes.BOOLEAN }
  }, {
    timestamps: true
  });

  Answer.associate = () => {
    Answer.belongsTo(models.exercise);
    Answer.hasMany(models.userAnswer);
    Answer.hasMany(models.explanation);
  };

  return Answer;
};
