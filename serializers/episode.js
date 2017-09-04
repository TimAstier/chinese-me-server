import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const EpisodeSerializer = new JSONAPISerializer('episodes', {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'imageUrl',
    'dialogs',
    'characters',
    'grammars',
    'multipleChoices',
    'audioToTexts',
    'seasonId',
    'score',
    'review',
    'locked'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (record.userEpisodes.length === 0) {
      record.locked = true;
      return record;
    }
    record.score = record.userEpisodes[0].score;
    record.review = record.userEpisodes[0].review;
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
  }
});

export default EpisodeSerializer;
