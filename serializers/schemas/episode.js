const episodeSchema = {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'imageUrl',
    'requiredUserData',
    'dialogs',
    'characters',
    'grammars',
    'multipleChoices',
    'audioToTexts',
    'videos',
    'seasonId',
    'score',
    'review',
    'locked',
    'scripted'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (record.userEpisodes.length === 0) {
      // first episode is automatically unlocked
      record.locked = record.number === 1 ? false : true;
      return record;
    }
    record.score = record.userEpisodes[0].score;
    record.locked = false;
    delete record.userEpisodes;
    return record;
  },
  dialogs: {
    ref: 'id',
    include: false
  },
  characters: {
    ref: 'id',
    include: false
  },
  grammars: {
    ref: 'id',
    include: false
  },
  multipleChoices: {
    ref: 'id',
    include: false
  },
  audioToTexts: {
    ref: 'id',
    include: false
  },
  videos: {
    ref: 'id',
    include: false
  }
};

export default episodeSchema;
