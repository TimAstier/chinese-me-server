module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Exaplanation = sequelize.define('explanation', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  Exaplanation.associate = () => {
    Exaplanation.belongsTo(models.answer);
    Exaplanation.belongsTo(models.language);
  };

  return Exaplanation;
};
