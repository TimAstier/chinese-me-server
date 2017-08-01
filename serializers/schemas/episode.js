const episodeSchema = {
  ref: 'id',
  attributes: ['id', 'title', 'number', 'status', 'score', 'dialogs', 'characters'],
  keyForAttribute: 'camelCase',
  dialogs: {
    ref: 'id',
    include: false
  },
  characters: {
    ref: 'id',
    include: false
  }
};

export default episodeSchema;
