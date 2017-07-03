export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Statement = sequelize.define('statement', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Statement.belongsTo(models.dialog);
        Statement.hasMany(models.sentence);
      }
    },
    instanceMethods: {}
  });
  return Statement;
};
