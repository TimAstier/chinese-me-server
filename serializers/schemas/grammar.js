module.exports = {
  ref: 'id',
  attributes: ['id', 'title', 'explanation', 'sentences'],
  keyForAttribute: 'camelCase',
  sentences: {
    ref: 'id',
    attributes: ['id', 'chinese', 'english', 'rawEnglish', 'sentenceGrammar'],
    include: false
  }
};
