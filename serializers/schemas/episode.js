const episodeSchema = {
  ref: 'id',
  attributes: ['id', 'title', 'number', 'status', 'score'],
  keyForAttribute: 'camelCase'
};

export default episodeSchema;
