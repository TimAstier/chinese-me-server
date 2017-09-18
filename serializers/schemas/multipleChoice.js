const multipleChoiceSchema = {
  ref: 'id',
  attributes: [
    'id',
    'question',
    'choices',
    'correctAnswer',
    'episodeId',
    'order',
    'translations'
  ],
  keyForAttribute: 'camelCase'
};

export default multipleChoiceSchema;
