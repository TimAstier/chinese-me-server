module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const CharacterEpisode = sequelize.define('characterEpisode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    characterId: { type: DataTypes.INTEGER },
    episodeId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        CharacterEpisode.belongsTo(models.character);
        CharacterEpisode.belongsTo(models.episode);
      }
    },
    instanceMethods: {}
  });
  return CharacterEpisode;
};
