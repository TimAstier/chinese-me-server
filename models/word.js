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
    Word.belongsToMany(models.audioToText, { through: 'wordAudioToText' });
    Word.hasMany(models.wordAudioToText, { onDelete: 'cascade' });
    Word.belongsToMany(models.dialog, { through: 'dialogWord' });
    Word.hasMany(models.dialogWord, { onDelete: 'cascade' });
    Word.hasMany(models.wordT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
  };

  return Word;
};
