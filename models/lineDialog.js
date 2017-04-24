export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const LineDialog = sequelize.define('lineDialog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    lineId: { type: DataTypes.INTEGER },
    dialogId: { type: DataTypes.INTEGER },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        LineDialog.belongsTo(models.line);
        LineDialog.belongsTo(models.dialog);
      }
    }
  });
  return LineDialog;
};
