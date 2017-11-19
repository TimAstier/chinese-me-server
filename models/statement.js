module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Statement = sequelize.define('statement', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  Statement.associate = () => {
    Statement.belongsTo(models.dialog);
    Statement.hasMany(models.sentence);
    Statement.belongsTo(models.avatar);
  };

  return Statement;
};
