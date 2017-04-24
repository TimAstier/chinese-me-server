export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const SentenceGrammar = sequelize.define('sentenceGrammar', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sentenceId: { type: DataTypes.INTEGER },
    grammarId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        SentenceGrammar.belongsTo(models.sentence);
        SentenceGrammar.belongsTo(models.grammar);
      }
    }
  });
  return SentenceGrammar;
};
