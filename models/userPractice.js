module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserPractice = sequelize.define('userPractice', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    practiceId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  UserPractice.associate = () => {
    UserPractice.belongsTo(models.user);
    UserPractice.belongsTo(models.practice);
  };

  return UserPractice;
};
