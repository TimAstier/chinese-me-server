module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Code = sequelize.define('code', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    value: { type: DataTypes.STRING },
    activated: { type: DataTypes.BOOLEAN, defaultValue: false},
    shared: { type: DataTypes.BOOLEAN, defaultValue: false}
  }, {
    timestamps: true
  });

  Code.associate = () => {
    Code.belongsTo(models.user);
  };

  return Code;
};
