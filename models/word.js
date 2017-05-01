export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Word = sequelize.define('word', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING },
    pinyin: { type: DataTypes.STRING },
    pinyint: { type: DataTypes.STRING },
    english: { type: DataTypes.STRING },
    explanation: { type: DataTypes.TEXT }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Word.hasMany(models.wordLesson, { onDelete: 'cascade', hooks: true });
        Word.belongsToMany(models.lesson, { through: 'wordLesson' });
        Word.hasMany(models.wordUser, { onDelete: 'cascade', hooks: true });
        Word.belongsToMany(models.user, { through: 'wordUser' });
      }
    }
  });
  return Word;
};
