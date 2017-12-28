module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Word = sequelize.define('word', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING },
    pinyin: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  Word.associate = () => {
    Word.hasMany(models.wordT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
    Word.belongsToMany(models.episode, { through: 'wordEpisode' });
    Word.hasMany(models.wordEpisode, { onDelete: 'cascade' });
    Word.belongsToMany(models.exercise, { through: 'exerciseWord' });
    Word.hasMany(models.exerciseWord);
  };

  return Word;
};
