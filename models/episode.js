module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Episode = sequelize.define('episode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER },
    imageUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Episode.hasMany(models.dialog);
        Episode.hasMany(models.grammar);
        Episode.belongsToMany(models.character, { through: 'characterEpisode' });
        Episode.hasMany(models.characterEpisode, { onDelete: 'cascade' });
        Episode.belongsTo(models.season);
        Episode.hasMany(models.multipleChoice);
        Episode.hasMany(models.audioToText);
        Episode.hasMany(models.userEpisode, { onDelete: 'cascade' });
        Episode.hasMany(models.example);
      }
    },
    instanceMethods: {}
  });
  return Episode;
};
