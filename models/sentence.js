// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Sentence = sequelize.define('sentence', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER },
    mood: { type: DataTypes.STRING },
    chinese: { type: DataTypes.STRING },
    audioUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Sentence.belongsTo(models.statement);
        Sentence.hasMany(models.sentenceT,
          { as: 'translations', onDelete: 'cascade', hooks: true }
        );
      }
    },
    instanceMethods: {}
  });
  return Sentence;
};
