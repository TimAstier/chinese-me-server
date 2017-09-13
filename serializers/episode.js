import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import ExampleSchema from './schemas/example';

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
    'locked',
    'examples'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (record.userEpisodes) {
      if (record.userEpisodes.length === 0) {
        // first episode is automatically unlocked
        record.locked = record.number === 1 ? false : true;
        return record;
      }
      record.score = record.userEpisodes[0].score;
      record.review = record.userEpisodes[0].review;
      record.locked = false;
      delete record.userEpisodes;
      return record;
    }
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
  examples: ExampleSchema
});

export default EpisodeSerializer;
