export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Char = sequelize.define('char', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING(1) },
    pinyin: { type: DataTypes.STRING },
    pinyint: { type: DataTypes.STRING },
    explanation: { type: DataTypes.TEXT }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Char.hasMany(models.charLesson, { onDelete: 'cascade', hooks: true });
        Char.belongsToMany(models.lesson, { through: 'charLesson' });
        Char.belongsToMany(models.user, { through: 'charUser' });
      }
    }
  });
  return Char;
};
