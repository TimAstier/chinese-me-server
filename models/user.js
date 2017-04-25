export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password_digest: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        User.belongsToMany(models.grammar, { through: 'grammarUsers' });
        User.belongsToMany(models.char, { through: 'charUsers' });
        User.belongsToMany(models.lesson, { through: 'lessonUsers' });
        User.belongsToMany(models.dialog, { through: 'dialogUsers' });
      }
    }
  });
  return User;
};
