export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Language = sequelize.define('language', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Language.hasMany(models.sentenceT);
        Language.hasMany(models.multipleChoiceT);
        Language.hasMany(models.grammarT);
        Language.hasMany(models.exampleT);
        Language.hasMany(models.dialogT);
        Language.hasMany(models.characterT);
      }
    },
    instanceMethods: {}
  });
  return Language;
};
