module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const Exercise = sequelize.define('exercise', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: {
      type: DataTypes.ENUM(
        'textToText',
        'choicesToOrder',
        'audioToText',
        'audioToChoice',
        'textToChoice',
        'audioToWords',
        'characterPinyin',
        'characterStroke',
        'textToSpeech',
        'audioToSpeech'
      ),
      allowNull: false
    },
    text: { type: DataTypes.STRING },
    audioUrl: { type: DataTypes.STRING },
    choices: { type: DataTypes.ARRAY(DataTypes.STRING) },
    characterId: { type: DataTypes.INTEGER },
    practiceId: { type: DataTypes.INTEGER },
    number: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    validate: {
      hasRequiredData() {
        if (this.type) {
          switch (this.type) {
            case 'textToText':
              if (!this.text) {
                throw new Error(this.type + ' exercises need to have a text attribute');
              }
              break;
            case 'choicesToOrder':
              if (!this.choices) {
                throw new Error(this.type + ' exercises need to have a choices attribute');
              }
              break;
            case 'audioToText':
              if (!this.audioUrl) {
                throw new Error(this.type + ' exercises need to have a audioUrl attribute');
              }
              break;
            case 'audioToChoice':
              if (!this.audioUrl || !this.choices) {
                throw new Error(this.type + ' exercises need to have a audioUrl and choices attributes');
              }
              break;
            case 'textToChoice':
              if (!this.text || !this.choices) {
                throw new Error(this.type + ' exercises need to have a text and choices attributes');
              }
              break;
            case 'audioToWords':
              if (!this.audioUrl) {
                throw new Error(this.type + ' exercises need to have a audioUrl attribute');
              }
              break;
            case 'characterPinyin':
            case 'characterStroke':
              if (!this.characterId) {
                throw new Error(this.type + ' exercises need to have an associated character');
              }
              break;
            case 'textToSpeech':
              if (!this.text || !this.audioUrl) {
                throw new Error(this.type + ' exercises need to have text and audioUrl attribute');
              }
              break;
            case 'audioToSpeech':
              if (!this.audioUrl) {
                throw new Error(this.type + ' exercises need to have audioUrl attribute');
              }
              break;
            default:
              throw new Error('Unknown exercise type: ', this.type);
          }
        }
      }
    }
  });

  Exercise.associate = () => {
    Exercise.hasMany(models.answer);
    Exercise.belongsTo(models.character);
    Exercise.belongsTo(models.practice);
    Exercise.belongsToMany(models.word, { through: 'exerciseWord' });
    Exercise.hasMany(models.exerciseWord);
    Exercise.hasMany(models.exerciseT,
      { as: 'translations', onDelete: 'cascade', hooks: true }
    );
  };

  return Exercise;
};
