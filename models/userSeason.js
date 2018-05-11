module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserSeason = sequelize.define('userSeason', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    seasonId: { type: DataTypes.INTEGER },
    purchased: { type: DataTypes.BOOLEAN, defaultValue: false },
    paidPrice: { type: DataTypes.FLOAT }
  }, {
    timestamps: true
  });

  UserSeason.associate = () => {
    UserSeason.belongsTo(models.user);
    UserSeason.belongsTo(models.season);
  };

  return UserSeason;
};
