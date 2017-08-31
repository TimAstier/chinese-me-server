import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const EpisodeSerializer = new JSONAPISerializer('episodes', {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'dialogs',
    'characters',
    'grammars',
    'multipleChoices',
    'audioToTexts',
    'seasonId'
  ],
  keyForAttribute: 'camelCase',
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
