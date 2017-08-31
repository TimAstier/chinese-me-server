export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Season = sequelize.define('season', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Season.hasMany(models.episode);
      }
    },
    instanceMethods: {}
  });
  return Season;
};