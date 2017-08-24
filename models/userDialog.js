export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserDialog = sequelize.define('userDialog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    dialogId: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        UserDialog.belongsTo(models.user);
        UserDialog.belongsTo(models.dialog);
      }
    },
    instanceMethods: {}
  });
  return UserDialog;
};
