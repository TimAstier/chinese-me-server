module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const WordAudioToText = sequelize.define('wordAudioToText', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    wordId: { type: DataTypes.INTEGER },
    audioToTextId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  WordAudioToText.associate = () => {
    WordAudioToText.belongsTo(models.word);
    WordAudioToText.belongsTo(models.audioToText);
  };

  return WordAudioToText;
};
