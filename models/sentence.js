export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Sentence = sequelize.define('sentence', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING },
    english: { type: DataTypes.STRING },
    rawEnglish: { type: DataTypes.STRING },
    audioUrl: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Sentence.hasMany(models.sentenceGrammar, { onDelete: 'cascade', hooks: true });
        Sentence.belongsToMany(models.grammar, { through: 'sentenceGrammar' });
      }
    }
  });
  return Sentence;
};
