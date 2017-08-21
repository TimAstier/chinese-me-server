const episodeSchema = {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'dialogs',
    'characters',
    'grammars',
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
  }
};

export default episodeSchema;
