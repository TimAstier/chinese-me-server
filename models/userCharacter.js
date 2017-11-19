module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserCharacter = sequelize.define('userCharacter', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    characterId: { type: DataTypes.INTEGER },
    etymology: { type: DataTypes.INTEGER },
    pinyin: { type: DataTypes.INTEGER },
    writing: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  UserCharacter.associate = () => {
    UserCharacter.belongsTo(models.user);
    UserCharacter.belongsTo(models.character);
  };

  return UserCharacter;
};
