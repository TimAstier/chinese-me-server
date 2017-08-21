const seasonSchema = {
  ref: 'id',
  attributes: [
    'id',
    'number',
    'episodes'
  ],
  keyForAttribute: 'camelCase',
  episodes: {
    ref: 'id',
    include: false
  }
};

export default seasonSchema;
