export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const AvatarDialog = sequelize.define('avatarDialog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    avatarId: { type: DataTypes.INTEGER },
    dialogId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        AvatarDialog.belongsTo(models.avatar);
        AvatarDialog.belongsTo(models.dialog);
      }
    },
    instanceMethods: {}
  });
  return AvatarDialog;
};
