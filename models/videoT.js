module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const VideoT = sequelize.define('videoT', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    videoUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        VideoT.belongsTo(models.video);
        VideoT.belongsTo(models.language);
      }
    },
    instanceMethods: {}
  });
  return VideoT;
};
