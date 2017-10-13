// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const MultipleChoice = sequelize.define('multipleChoice', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    question: { type: DataTypes.STRING, allowNull: false },
    choices: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    correctAnswer: { type: DataTypes.INTEGER, allowNull: false },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        MultipleChoice.belongsTo(models.episode);
        MultipleChoice.hasMany(models.multipleChoiceT,
          { as: 'translations', onDelete: 'cascade', hooks: true }
        );
      }
    },
    instanceMethods: {}
  });
  return MultipleChoice;
};
