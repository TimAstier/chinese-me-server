export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserCharacter = sequelize.define('userCharacter', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    characterId: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        UserCharacter.belongsTo(models.user);
        UserCharacter.belongsTo(models.character);
      }
    },
    instanceMethods: {}
  });
  return UserCharacter;
};
