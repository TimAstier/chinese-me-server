// NOTE: This table has an associated translation table
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Character = sequelize.define('character', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    simpChar: { type: DataTypes.STRING(1), allowNull: false },
    pinyinNumber: { type: DataTypes.STRING },
    hanziData: { type: DataTypes.JSON }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Character.belongsToMany(models.episode, { through: 'characterEpisode' });
        Character.hasMany(models.characterEpisode, { onDelete: 'cascade' });
        Character.belongsToMany(models.user, { through: 'userCharacter' });
        Character.hasMany(models.userCharacter, { onDelete: 'cascade' });
        Character.hasMany(models.characterT,
          { as: 'translations', onDelete: 'cascade', hooks: true }
        );
      }
    },
    instanceMethods: {}
  });
  return Character;
};
