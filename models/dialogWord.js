module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const DialogWord = sequelize.define('dialogWord', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dialogId: { type: DataTypes.INTEGER },
    wordId: { type: DataTypes.INTEGER },
  }, {
    timestamps: true
  });

  DialogWord.associate = () => {
    DialogWord.belongsTo(models.dialog);
    DialogWord.belongsTo(models.word);
  };

  return DialogWord;
};
