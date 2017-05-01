export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const CharUser = sequelize.define('charUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    charId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        CharUser.belongsTo(models.char);
        CharUser.belongsTo(models.user);
      }
    }
  });
  return CharUser;
};
