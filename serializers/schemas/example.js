const ExampleSchema = {
  ref: 'id',
  attributes: [
    'id',
    'order',
    'chinese',
    'pinyin',
    'english',
    'literalEnglish'
  ],
  keyForAttribute: 'camelCase'
};

export default ExampleSchema;
