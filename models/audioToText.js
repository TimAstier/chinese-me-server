module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const AudioToText = sequelize.define('audioToText', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    audioUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  AudioToText.associate = () => {
    AudioToText.belongsTo(models.practice);
    AudioToText.belongsToMany(models.word, { through: 'wordAudioToText' });
    AudioToText.hasMany(models.wordAudioToText, { onDelete: 'cascade' });
    AudioToText.hasOne(models.exercise);
  };

  return AudioToText;
};
