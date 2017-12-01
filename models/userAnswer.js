module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserAnswer = sequelize.define('userAnswer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
  }, {
    timestamps: true
  });

  UserAnswer.associate = () => {
    UserAnswer.belongsTo(models.answer);
    UserAnswer.belongsTo(models.user);
  };

  return UserAnswer;
};
