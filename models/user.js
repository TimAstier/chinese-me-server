export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password_digest: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN },
    studyUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        User.hasMany(models.grammarUser, { onDelete: 'cascade', hooks: true });
        User.belongsToMany(models.grammar, { through: 'grammarUser' });
        User.hasMany(models.charUser, { onDelete: 'cascade', hooks: true });
        User.belongsToMany(models.char, { through: 'charUsers' });
        User.belongsToMany(models.lesson, { through: 'lessonUsers' });
        User.hasMany(models.dialogUser, { onDelete: 'cascade', hooks: true });
        User.belongsToMany(models.dialog, { through: 'dialogUser' });
        User.hasMany(models.wordUser, { onDelete: 'cascade', hooks: true });
        User.belongsToMany(models.word, { through: 'wordUser' });
      }
    }
  });
  return User;
};
