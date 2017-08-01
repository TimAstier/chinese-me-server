export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Character = sequelize.define('character', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    simpChar: { type: DataTypes.STRING(1), allowNull: false },
    pinyinNumber: { type: DataTypes.STRING },
    audioUrl: { type: DataTypes.STRING },
    etymologyUrl: { type: DataTypes.STRING },
    writingUrl: { type: DataTypes.STRING }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Character.belongsToMany(models.episode, { through: 'characterEpisode' });
        Character.hasMany(models.characterEpisode, { onDelete: 'cascade' });
      }
    },
    instanceMethods: {}
  });
  return Character;
};
