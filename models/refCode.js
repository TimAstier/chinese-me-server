module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const refCode = sequelize.define('refCode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    value: { type: DataTypes.STRING, allowNull: false, unique: true },
  }, {
    timestamps: true
  });

  refCode.associate = () => {
    refCode.hasMany(models.user);
    refCode.belongsTo(models.affiliate);
  };

  return refCode;
};
