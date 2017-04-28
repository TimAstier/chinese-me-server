export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const GrammarUser = sequelize.define('grammarUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    grammarId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        GrammarUser.belongsTo(models.grammar);
        GrammarUser.belongsTo(models.user);
      }
    }
  });
  return GrammarUser;
};
