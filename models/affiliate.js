module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const affiliate = sequelize.define('affiliate', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  }, {
    timestamps: true
  });

  affiliate.associate = () => {
    affiliate.hasMany(models.refCode);
  };

  return affiliate;
};
