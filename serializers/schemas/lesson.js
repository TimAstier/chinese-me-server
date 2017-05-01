module.exports = {
  ref: 'id',
  attributes: ['id', 'title', 'dialogs', 'grammars', 'chars', 'words'],
  keyForAttribute: 'camelCase',
  dialogs: {
    ref: 'id',
    attributes: ['id', 'dialogLesson', 'dialogUsers'],
    include: false
  },
  grammars: {
    ref: 'id',
    attributes: ['id', 'grammarLesson', 'grammarUsers'],
    include: false
  },
  chars: {
    ref: 'id',
    attributes: ['id', 'charLesson', 'charUsers'],
    include: false
  },
  words: {
    ref: 'id',
    attributes: ['id', 'wordLesson', 'wordUsers'],
    include: false
  }
};
