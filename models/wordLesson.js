export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const WordLesson = sequelize.define('wordLesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    wordId: { type: DataTypes.INTEGER },
    lessonId: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.TEXT },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        WordLesson.belongsTo(models.word);
        WordLesson.belongsTo(models.lesson);
      }
    }
  });
  return WordLesson;
};
