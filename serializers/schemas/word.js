const wordSchema = {
  ref: 'id',
  attributes: [
    'id',
    'chinese',
    'pinyin',
    'order',
    'translations'
  ],
  keyForAttribute: 'camelCase'
};

export default wordSchema;
