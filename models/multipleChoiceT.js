export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const MultipleChoiceT = sequelize.define('multipleChoiceT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    explanation: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        MultipleChoiceT.belongsTo(models.multipleChoice);
        MultipleChoiceT.belongsTo(models.language);
      }
    },
    instanceMethods: {}
  });
  return MultipleChoiceT;
};
