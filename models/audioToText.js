module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const AudioToText = sequelize.define('audioToText', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    audioUrl: { type: DataTypes.STRING },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  AudioToText.associate = () => {
    AudioToText.belongsTo(models.episode);
    AudioToText.belongsToMany(models.word, { through: 'wordAudioToText' });
    AudioToText.hasMany(models.wordAudioToText, { onDelete: 'cascade' });
  };

  return AudioToText;
};
