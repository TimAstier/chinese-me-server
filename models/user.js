module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    passwordDigest: { type: DataTypes.STRING },
    activationToken: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN, defaultValue: false },
    refDate: { type: DataTypes.DATE }
  }, {
    timestamps: true
  });

  User.associate = () => {
    User.hasMany(models.feedback);
    User.belongsToMany(models.character, { through: 'userCharacter' });
    User.hasMany(models.userCharacter, { onDelete: 'cascade' });
    User.belongsToMany(models.grammar, { through: 'userGrammar' });
    User.hasMany(models.userGrammar, { onDelete: 'cascade' });
    User.belongsToMany(models.practice, { through: 'userPractice' });
    User.hasMany(models.userPractice, { onDelete: 'cascade' });
    User.belongsToMany(models.dialog, { through: 'userDialog' });
    User.hasMany(models.userDialog, { onDelete: 'cascade' });
    User.hasMany(models.userEpisode, { onDelete: 'cascade' });
    User.hasOne(models.userSetting, { onDelete: 'cascade' });
    User.hasMany(models.userAnswer, { onDelete: 'cascade' });
    User.belongsToMany(models.season, { through: 'userSeason' });
    User.hasMany(models.userSeason, { onDelete: 'cascade' });
    User.hasMany(models.code);
    User.belongsTo(models.refCode);
  };

  return User;
};
