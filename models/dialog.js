export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Dialog = sequelize.define('dialog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    introAudioUrl: { type: DataTypes.STRING },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Dialog.belongsTo(models.episode);
        Dialog.belongsToMany(models.avatar, { through: 'avatarDialog' });
        Dialog.hasMany(models.avatarDialog, { onDelete: 'cascade' });
        Dialog.hasMany(models.statement);
      }
    },
    instanceMethods: {}
  });
  return Dialog;
};
