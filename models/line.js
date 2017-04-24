export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Line = sequelize.define('line', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    avatar: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    meta: { type: DataTypes.STRING },
    text: { type: DataTypes.TEXT },
    audioUrl: { type: DataTypes.STRING },
    pinyint: { type: DataTypes.TEXT },
    english: { type: DataTypes.TEXT }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Line.hasMany(models.lineDialog, { onDelete: 'cascade', hooks: true });
        Line.belongsToMany(models.dialog, { through: 'lineDialog' });
      }
    }
  });
  return Line;
};
