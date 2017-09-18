// NOTE: This table has an associated translation table
export default (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Example = sequelize.define('example', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    chinese: { type: DataTypes.STRING },
    pinyin: { type: DataTypes.STRING },
    order: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    classMethods: {
      associate: () => {
        Example.belongsTo(models.episode);
        Example.hasMany(models.exampleT,
          { as: 'translations', onDelete: 'cascade', hooks: true }
        );
      }
    },
    instanceMethods: {}
  });
  return Example;
};
