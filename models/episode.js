export default (sequelize, DataTypes) => {
  const Episode = sequelize.define('episode', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {}
  });
  return Episode;
};
