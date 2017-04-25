export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Grammar = sequelize.define('grammar', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    explanation: { type: DataTypes.TEXT }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Grammar.hasMany(models.grammarLesson, { onDelete: 'cascade', hooks: true });
        Grammar.belongsToMany(models.lesson, { through: 'grammarLesson' });
        Grammar.hasMany(models.sentenceGrammar, { onDelete: 'cascade', hooks: true });
        Grammar.belongsToMany(models.sentence, { through: 'sentenceGrammar' });
        Grammar.belongsToMany(models.user, { through: 'grammarUsers' });
      }
    },
    // BUG: Sequelize names the table 'grammar' by default
    // This is a bug from 'inflection'. Using this workaround:
    freezeTableName: true,
    tableName: 'grammars',
    name: {
      plural: 'grammars',
      singular: 'grammar'
    }
  });
  return Grammar;
};
