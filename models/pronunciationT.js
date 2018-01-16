module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const PronunciationT = sequelize.define('pronunciationT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
  }, {
    timestamps: true
  });

  PronunciationT.associate = () => {
    PronunciationT.belongsTo(models.pronunciation);
    PronunciationT.belongsTo(models.language);
  };

  return PronunciationT;
};
