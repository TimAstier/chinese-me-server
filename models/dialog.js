export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Dialog = sequelize.define('dialog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    introAudioUrl: { type: DataTypes.STRING },
    chineseTitle: { type: DataTypes.STRING },
    englishTitle: { type: DataTypes.STRING },
    englishIntro: { type: DataTypes.TEXT },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Dialog.belongsTo(models.episode);
        Dialog.belongsToMany(models.avatar, { through: 'avatarDialog' });
        Dialog.hasMany(models.avatarDialog, { onDelete: 'cascade' });
        Dialog.hasMany(models.statement);
        Dialog.belongsToMany(models.user, { through: 'userDialog' });
        Dialog.hasMany(models.userDialog, { onDelete: 'cascade' });
      }
    },
    instanceMethods: {}
  });
  return Dialog;
};
