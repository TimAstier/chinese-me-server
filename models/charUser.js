export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const charUser = sequelize.define('charUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    charId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        charUser.belongsTo(models.char);
        charUser.belongsTo(models.user);
      }
    }
  });
  return charUser;
};
