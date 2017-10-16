const multipleChoiceSchema = {
  ref: 'id',
  attributes: [
    'id',
    'question',
    'choices',
    'episodeId',
    'order',
    'translations'
  ],
  keyForAttribute: 'camelCase'
};

export default multipleChoiceSchema;
