module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

// Practice with number === 0 is the review

  const Practice = sequelize.define('practice', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.INTEGER },
    type: { type: DataTypes.ENUM('review', 'exam') }
  }, {
    timestamps: true
  });

  Practice.associate = () => {
    Practice.belongsTo(models.episode);
    Practice.hasMany(models.practiceExercise);
    Practice.belongsToMany(models.exercise, { through: 'practiceExercise' });
  };

  return Practice;
};
