const grammarSchema = {
  ref: 'id',
  attributes: [
    'id',
    'order',
    'completed',
    'translations'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.completed = record.userGrammars.length !== 0;
    return record;
  }
};

export default grammarSchema;
