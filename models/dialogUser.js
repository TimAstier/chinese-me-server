export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const DialogUser = sequelize.define('dialogUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dialogId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        DialogUser.belongsTo(models.dialog);
        DialogUser.belongsTo(models.user);
      }
    }
  });
  return DialogUser;
};
