export default (sequelize, DataTypes) => {
  // const models = sequelize.models;

  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password_digest: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN, default: false }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
      }
    }
  });
  return User;
};
