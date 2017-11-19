module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Language = sequelize.define('language', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    timestamps: true
  });

  Language.associate = () => {
    Language.hasMany(models.sentenceT);
    Language.hasMany(models.multipleChoiceT);
    Language.hasMany(models.grammarT);
    Language.hasMany(models.exampleT);
    Language.hasMany(models.dialogT);
    Language.hasMany(models.characterT);
    Language.hasMany(models.wordT);
  };

  return Language;
};
