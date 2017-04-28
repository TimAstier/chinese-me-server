export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Dialog = sequelize.define('dialog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Dialog.hasMany(models.dialogLesson, { onDelete: 'cascade', hooks: true });
        Dialog.belongsToMany(models.lesson, { through: 'dialogLesson' });
        Dialog.hasMany(models.lineDialog, { onDelete: 'cascade', hooks: true });
        Dialog.belongsToMany(models.line, { through: 'lineDialog' });
        Dialog.hasMany(models.dialogUser, { onDelete: 'cascade', hooks: true });
        Dialog.belongsToMany(models.user, { through: 'dialogUser' });
      }
    }
  });
  return Dialog;
};
