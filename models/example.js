export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Example = sequelize.define('example', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING },
    pinyin: { type: DataTypes.STRING },
    english: { type: DataTypes.STRING },
    literalEnglish: { type: DataTypes.STRING },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Example.belongsTo(models.episode);
      }
    },
    instanceMethods: {}
  });
  return Example;
};
