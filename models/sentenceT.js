module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const SentenceT = sequelize.define('sentenceT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    translation: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  SentenceT.associate = () => {
    SentenceT.belongsTo(models.sentence);
    SentenceT.belongsTo(models.language);
  };

  return SentenceT;
};
