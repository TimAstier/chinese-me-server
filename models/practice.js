module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  // List of types maintained in this spreadsheet:
  // https://docs.google.com/spreadsheets/d/1PFXgi1jZXCCA_SvxV2sFIOQpnqTp9MHf7DfgMSPW7ig/edit#gid=1802681389
  const types = [
    'P1', 'P2', 'P3', 'P4', 'P5', 'C1', 'C2', 'C3', 'C4', 'C5',
    'C6', 'W1', 'W2', 'W3', 'W4', 'W5', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
    'G7'
  ];

  const Practice = sequelize.define('practice', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.INTEGER },
    type: { type: DataTypes.STRING },
    recommended: { type: DataTypes.BOOLEAN }
  }, {
    timestamps: true,
    validate: {
      hasCorrectType() {
        if (this.type && types.indexOf(this.type) === -1) {
          throw new Error('The type ' + this.type + ' is not supported');
        }
      }
    }
  });

  Practice.associate = () => {
    Practice.belongsTo(models.episode);
    Practice.hasMany(models.exercise);
  };

  return Practice;
};
