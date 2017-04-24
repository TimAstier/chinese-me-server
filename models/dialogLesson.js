export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const DialogLesson = sequelize.define('dialogLesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dialogId: { type: DataTypes.INTEGER },
    lessonId: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.TEXT },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        DialogLesson.belongsTo(models.dialog);
        DialogLesson.belongsTo(models.lesson);
      }
    }
  });
  return DialogLesson;
};
