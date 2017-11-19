module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Season = sequelize.define('season', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  Season.associate = () => {
    Season.hasMany(models.episode);
  };

  return Season;
};
