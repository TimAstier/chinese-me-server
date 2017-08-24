export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Grammar = sequelize.define('grammar', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    videoUrl: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Grammar.belongsTo(models.episode);
        Grammar.belongsToMany(models.user, { through: 'userGrammar' });
        Grammar.hasMany(models.userGrammar, { onDelete: 'cascade' });
      }
    },
    instanceMethods: {},
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
