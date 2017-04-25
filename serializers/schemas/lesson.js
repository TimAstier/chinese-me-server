module.exports = {
  ref: 'id',
  attributes: ['id', 'title', 'dialogs', 'grammars', 'chars'],
  keyForAttribute: 'camelCase',
  dialogs: {
    ref: 'id',
    attributes: ['id', 'dialogLesson'],
    include: false
  },
  grammars: {
    ref: 'id',
    attributes: ['id', 'grammarLesson'],
    include: false
  },
  chars: {
    ref: 'id',
    attributes: ['id', 'charLesson'],
    include: false
  }
};
