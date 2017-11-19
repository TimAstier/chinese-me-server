module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Feedback = sequelize.define('feedback', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    subject: { type: DataTypes.STRING },
    message: { type: DataTypes.TEXT, allowNull: false },
    answered: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    timestamps: true
  });

  Feedback.associate = () => {
    Feedback.belongsTo(models.user);
  };

  return Feedback;
};
