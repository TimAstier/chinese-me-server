export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Avatar = sequelize.define('avatar', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    chineseName: { type: DataTypes.STRING },
    happyImage: { type: DataTypes.STRING },
    normalImage: { type: DataTypes.STRING },
    surprisedImage: { type: DataTypes.STRING },
    questionImage: { type: DataTypes.STRING },
    embarrassedImage: { type: DataTypes.STRING },
    sadImage: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Avatar.hasMany(models.statement);
        Avatar.belongsToMany(models.dialog, { through: 'avatarDialog' });
        Avatar.hasMany(models.avatarDialog, { onDelete: 'cascade' });
      }
    },
    instanceMethods: {}
  });
  return Avatar;
};
