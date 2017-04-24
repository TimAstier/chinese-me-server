export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Course = sequelize.define('course', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Course.hasMany(models.lesson);
      }
    }
  });
  return Course;
};
