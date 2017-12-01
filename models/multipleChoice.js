// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const MultipleChoice = sequelize.define('multipleChoice', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    question: { type: DataTypes.STRING, allowNull: false },
    // NOTE: The first choice needs to be the correct one.
    choices: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false }
  }, {
    timestamps: true
  });

  MultipleChoice.associate = () => {
    MultipleChoice.belongsTo(models.practice);
    MultipleChoice.hasMany(models.multipleChoiceT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
    MultipleChoice.hasOne(models.exercise);
  };

  return MultipleChoice;
};
