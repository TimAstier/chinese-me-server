export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Episode = sequelize.define('episode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Episode.hasMany(models.dialog);
      }
    },
    instanceMethods: {}
  });
  return Episode;
};