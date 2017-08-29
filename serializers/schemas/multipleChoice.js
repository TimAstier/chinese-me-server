const multipleChoiceSchema = {
  ref: 'id',
  attributes: [
    'id',
    'question',
    'choices',
    'correctAnswer',
    'explanation',
    'episodeId',
    'order'
  ],
  keyForAttribute: 'camelCase'
};

export default multipleChoiceSchema;
