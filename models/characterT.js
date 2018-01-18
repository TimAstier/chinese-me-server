module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const CharacterT = sequelize.define('characterT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    meaning: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  CharacterT.associate = () => {
    CharacterT.belongsTo(models.character);
    CharacterT.belongsTo(models.language);
  };

  return CharacterT;
};
