export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Sentence = sequelize.define('sentence', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER },
    audioUrl: { type: DataTypes.STRING },
    mood: { type: DataTypes.STRING },
    chinese: { type: DataTypes.STRING },
    english: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Sentence.belongsTo(models.statement);
      }
    },
    instanceMethods: {}
  });
  return Sentence;
};
