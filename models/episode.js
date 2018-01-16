module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Episode = sequelize.define('episode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER },
    imageUrl: { type: DataTypes.STRING },
    requiredUserData: { type: DataTypes.ARRAY(DataTypes.STRING) }
  }, {
    timestamps: true
  });

  Episode.associate = () => {
    Episode.hasMany(models.dialog);
    Episode.hasMany(models.grammar);
    Episode.hasMany(models.pronunciation);
    Episode.belongsToMany(models.character, { through: 'characterEpisode' });
    Episode.hasMany(models.characterEpisode, { onDelete: 'cascade' });
    Episode.belongsTo(models.season);
    Episode.hasMany(models.practice);
    Episode.hasMany(models.video);
    Episode.hasMany(models.userEpisode, { onDelete: 'cascade' });
    Episode.hasMany(models.example);
    Episode.belongsToMany(models.word, { through: 'wordEpisode' });
    Episode.hasMany(models.wordEpisode, { onDelete: 'cascade' });
  };

  return Episode;
};
