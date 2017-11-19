// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Video = sequelize.define('video', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  Video.associate = () => {
    Video.belongsTo(models.episode);
    Video.hasMany(models.videoT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
  };

  return Video;
};
