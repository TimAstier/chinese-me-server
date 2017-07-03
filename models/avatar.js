export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Avatar = sequelize.define('avatar', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    chineseName: { type: DataTypes.STRING },
    happyImage: { type: DataTypes.STRING },
    blinkImage: { type: DataTypes.STRING },
    surprisedImage: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Avatar.hasMany(models.sentence);
        Avatar.belongsToMany(models.dialog, { through: 'avatarDialog' });
        Avatar.hasMany(models.avatarDialog, { onDelete: 'cascade' });
      }
    },
    instanceMethods: {}
  });
  return Avatar;
};
