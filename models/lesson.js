export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Lesson = sequelize.define('lesson', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Lesson.belongsTo(models.course);
        Lesson.hasMany(models.grammarLesson, { onDelete: 'cascade', hooks: true });
        Lesson.belongsToMany(models.grammar, { through: 'grammarLesson' });
        Lesson.hasMany(models.charLesson, { onDelete: 'cascade', hooks: true });
        Lesson.belongsToMany(models.char, { through: 'charLesson' });
        Lesson.belongsToMany(models.user, { through: 'lessonUsers' });
      }
    }
  });
  return Lesson;
};
