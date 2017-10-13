module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const DialogT = sequelize.define('dialogT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    titleTranslation: { type: DataTypes.STRING },
    introAudioUrl: { type: DataTypes.STRING },
    intro: { type: DataTypes.TEXT }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        DialogT.belongsTo(models.dialog);
        DialogT.belongsTo(models.language);
      }
    },
    instanceMethods: {}
  });
  return DialogT;
};
