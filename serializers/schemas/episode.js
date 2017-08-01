const episodeSchema = {
  ref: 'id',
  attributes: ['id', 'title', 'number', 'status', 'score', 'dialogs'],
  keyForAttribute: 'camelCase',
  dialogs: {
    ref: 'id',
    include: false
  }
};

export default episodeSchema;
