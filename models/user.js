export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password_digest: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    classMethods: {
      associate: () => {
        User.hasMany(models.feedback);
      }
    },
    instanceMethods: {}
  });
  return User;
};
