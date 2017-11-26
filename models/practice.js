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
    Practice.hasMany(models.multipleChoice);
    Practice.hasMany(models.audioToText);
    Practice.belongsToMany(models.character, { through: 'characterExercise' });
    Practice.hasMany(models.characterExercise, { onDelete: 'cascade' });
  };

  return Practice;
};
