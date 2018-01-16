// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Pronunciation = sequelize.define('pronunciation', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true
  });

  Pronunciation.associate = () => {
    Pronunciation.belongsTo(models.episode);
    Pronunciation.hasMany(models.pronunciationT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
  };

  return Pronunciation;
};
