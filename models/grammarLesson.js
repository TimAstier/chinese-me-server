export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const GrammarLesson = sequelize.define('grammarLesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    grammarId: { type: DataTypes.INTEGER },
    lessonId: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.TEXT },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        GrammarLesson.belongsTo(models.grammar);
        GrammarLesson.belongsTo(models.lesson);
      }
    }
  });
  return GrammarLesson;
};
