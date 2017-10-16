module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const CharacterT = sequelize.define('characterT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    etymologyUrl: { type: DataTypes.STRING },
    writingUrl: { type: DataTypes.STRING },
    meaning: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        CharacterT.belongsTo(models.character);
        CharacterT.belongsTo(models.language);
      }
    },
    instanceMethods: {}
  });
  return CharacterT;
};
