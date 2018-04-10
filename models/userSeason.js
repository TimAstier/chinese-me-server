module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserSeason = sequelize.define('userSeason', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    seasonId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  UserSeason.associate = () => {
    UserSeason.belongsTo(models.user);
    UserSeason.belongsTo(models.season);
  };

  return UserSeason;
};
