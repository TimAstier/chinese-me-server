// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Grammar = sequelize.define('grammar', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    // BUG: Sequelize names the table 'grammar' by default
    // This is a bug from 'inflection'. Using this workaround:
    freezeTableName: true,
    tableName: 'grammars',
    name: {
      plural: 'grammars',
      singular: 'grammar'
    }
  });

  Grammar.associate = () => {
    Grammar.belongsTo(models.episode);
    Grammar.belongsToMany(models.user, { through: 'userGrammar' });
    Grammar.hasMany(models.userGrammar, { onDelete: 'cascade' });
    Grammar.hasMany(models.grammarT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
  };

  return Grammar;
};
