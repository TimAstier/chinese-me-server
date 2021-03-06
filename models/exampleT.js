module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const ExampleT = sequelize.define('exampleT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    translation: { type: DataTypes.STRING },
    literalTranslation: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  ExampleT.associate = () => {
    ExampleT.belongsTo(models.example);
    ExampleT.belongsTo(models.language);
  };

  return ExampleT;
};
