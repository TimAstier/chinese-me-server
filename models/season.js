module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Season = sequelize.define('season', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.INTEGER },
    price: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    available: { type: DataTypes.BOOLEAN }
  }, {
    timestamps: true
  });

  Season.associate = () => {
    Season.hasMany(models.episode);
    Season.belongsToMany(models.user, { through: 'userSeason' });
    Season.hasMany(models.userSeason, { onDelete: 'cascade' });
  };

  return Season;
};
