module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Word = sequelize.define('word', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING },
    pinyin: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Word.belongsToMany(models.audioToText, { through: 'wordAudioToText' });
        Word.hasMany(models.wordAudioToText, { onDelete: 'cascade' });
      }
    },
    instanceMethods: {}
  });
  return Word;
};
