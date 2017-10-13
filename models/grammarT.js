module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const GrammarT = sequelize.define('grammarT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    videoUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        GrammarT.belongsTo(models.grammar);
        GrammarT.belongsTo(models.language);
      }
    },
    instanceMethods: {}
  });
  return GrammarT;
};
