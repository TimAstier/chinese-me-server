export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const CharLesson = sequelize.define('charLesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    charId: { type: DataTypes.INTEGER },
    lessonId: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.TEXT },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        CharLesson.belongsTo(models.char);
        CharLesson.belongsTo(models.lesson);
      }
    }
  });
  return CharLesson;
};
