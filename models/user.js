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
        User.belongsToMany(models.grammar, { through: 'grammarUser' });
        User.belongsToMany(models.char, { through: 'charUser' });
        User.belongsToMany(models.lesson, { through: 'lessonUser' });
        User.belongsToMany(models.dialog, { through: 'dialogUser' });
      }
    }
  });
  return User;
};
