export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const WordUser = sequelize.define('wordUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    wordId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        WordUser.belongsTo(models.word);
        WordUser.belongsTo(models.user);
      }
    }
  });
  return WordUser;
};
