module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const WordT = sequelize.define('wordT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    meanings: { type: DataTypes.ARRAY(DataTypes.STRING) }
  }, {
    timestamps: true
  });

  WordT.associate = () => {
    WordT.belongsTo(models.word);
    WordT.belongsTo(models.language);
  };

  return WordT;
};
