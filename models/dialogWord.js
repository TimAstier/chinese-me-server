module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const DialogWord = sequelize.define('dialogWord', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dialogId: { type: DataTypes.INTEGER },
    wordId: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        DialogWord.belongsTo(models.dialog);
        DialogWord.belongsTo(models.word);
      }
    },
    instanceMethods: {}
  });
  return DialogWord;
};
