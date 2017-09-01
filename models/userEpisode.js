export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserEpisode = sequelize.define('userEpisode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    episodeId: { type: DataTypes.INTEGER },
    review: { type: DataTypes.BOOLEAN, defaultValue: false },
    score: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        UserEpisode.belongsTo(models.user);
        UserEpisode.belongsTo(models.episode);
      }
    },
    instanceMethods: {}
  });
  return UserEpisode;
};
