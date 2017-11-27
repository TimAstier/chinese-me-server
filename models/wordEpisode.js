module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const WordEpisode = sequelize.define('wordEpisode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    wordId: { type: DataTypes.INTEGER },
    episodeId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  WordEpisode.associate = () => {
    WordEpisode.belongsTo(models.word);
    WordEpisode.belongsTo(models.episode);
  };

  return WordEpisode;
};
