const videoSchema = {
  ref: 'id',
  attributes: [
    'id',
    'order',
    'translations'
  ],
  keyForAttribute: 'camelCase'
};

export default videoSchema;
