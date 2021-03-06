module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserGrammar = sequelize.define('userGrammar', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    grammarId: { type: DataTypes.INTEGER },
    explanation: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  UserGrammar.associate = () => {
    UserGrammar.belongsTo(models.user);
    UserGrammar.belongsTo(models.grammar);
  };

  return UserGrammar;
};
